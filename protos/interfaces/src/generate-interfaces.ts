import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

interface ServiceConfig {
  name: string;
  protoFile: string;
  package: string;
}

const services: ServiceConfig[] = [
  { name: "catalog", protoFile: "catalog.proto", package: "catalog" },
  { name: "mailer", protoFile: "mailer.proto", package: "mailer" },
  { name: "identity", protoFile: "identity.proto", package: "identity" },
  { name: "portfolio", protoFile: "portfolio.proto", package: "portfolio" },
  { name: "search", protoFile: "search.proto", package: "search" },
  { name: "files", protoFile: "files.proto", package: "files" },
  {
    name: "collaboration",
    protoFile: "collaboration.proto",
    package: "collaboration",
  },
];

const extractInterfaces = (content: string): string => {
  const lines = content.split("\n");
  const result: string[] = [];
  let depth = 0;
  let capturing = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (
      trimmed.startsWith("export namespace") ||
      trimmed.startsWith("export interface")
    ) {
      capturing = true;
      depth = 0;
    }

    if (capturing) {
      result.push(line);

      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === "{") depth++;
        if (char === "}") depth--;
      }

      if (depth === 0 && line.includes("}")) {
        capturing = false;
        result.push("");
      }
    }
  }

  return result.join("\n");
};

const generateInterfaces = (): void => {
  const baseDir = path.join(__dirname, "..", "..");
  const outputDir = path.join(__dirname, "..", "generated");
  const finalOutputPath = path.join(__dirname, "index.ts");

  const possiblePluginPaths = [
    path.resolve(
      __dirname,
      "..",
      "node_modules",
      ".bin",
      "protoc-gen-ts_proto"
    ),
    path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "node_modules",
      ".bin",
      "protoc-gen-ts_proto"
    ),
    path.resolve(process.cwd(), "node_modules", ".bin", "protoc-gen-ts_proto"),
  ];

  let pluginPath = "";
  for (const p of possiblePluginPaths) {
    if (fs.existsSync(p)) {
      pluginPath = p;
      break;
    }
  }

  if (!pluginPath) {
    console.error(
      "❌ protoc-gen-ts_proto not found. Run: yarn add -D ts-proto"
    );
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const protoFiles: string[] = [];
  const protoDirs = new Set<string>();

  services.forEach((service) => {
    const serviceDir = path.join(baseDir, service.name, "src");
    const protoPath = path.join(serviceDir, service.protoFile);

    if (fs.existsSync(protoPath)) {
      protoFiles.push(protoPath);
      protoDirs.add(serviceDir);
    }
  });

  const commonProtoDir = path.join(baseDir, "common");
  if (fs.existsSync(commonProtoDir)) {
    protoDirs.add(commonProtoDir);
  }

  protoDirs.add(baseDir);

  const includeFlags = Array.from(protoDirs)
    .map((dir) => `--proto_path=${dir}`)
    .join(" ");

  const protocCommand = `protoc ${includeFlags} --plugin=${pluginPath} --ts_proto_out=${outputDir} --ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,exportCommonSymbols=false,oneof=unions ${protoFiles.join(
    " "
  )}`;

  console.log("🔨 Generating TypeScript interfaces...");

  try {
    execSync(protocCommand, { stdio: "inherit" });
  } catch (error) {
    console.error("❌ Failed to generate interfaces:", error);
    process.exit(1);
  }

  const generatedFiles = fs
    .readdirSync(outputDir)
    .filter((file) => file.endsWith(".ts"))
    .sort();

  let combinedContent = `/* eslint-disable */\n`;
  combinedContent += `import * as grpc from "@grpc/grpc-js";\n`;
  combinedContent += `import { Observable } from "rxjs";\n`;
  combinedContent += `import {
  Metadata,
  ClientUnaryCall,
  ServiceError,
  ClientReadableStream,
  CallOptions,
  handleUnaryCall,
  UntypedServiceImplementation,
  Client
} from "@grpc/grpc-js";\n\n`;

  generatedFiles.forEach((file) => {
    const filePath = path.join(outputDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const interfacesOnly = extractInterfaces(content);

    if (interfacesOnly.trim()) {
      combinedContent += interfacesOnly + "\n";
    }
  });

  fs.writeFileSync(finalOutputPath, combinedContent, "utf-8");
  fs.rmSync(outputDir, { recursive: true, force: true });

  console.log(`✅ Generated unified interfaces: ${finalOutputPath}`);
  console.log(`📊 Total lines: ${combinedContent.split("\n").length}`);
};

generateInterfaces();
