import * as fs from "fs";
import * as path from "path";

interface ServiceConfig {
  name: string;
  protoFile: string;
  package: string;
  serviceName: string;
  url?: string;
}

const services: ServiceConfig[] = [
  {
    name: "catalog",
    protoFile: "catalog.proto",
    package: "catalog",
    serviceName: "CatalogService",
    url: process.env.CATALOG_SERVICE_URL || "catalog-service:50051",
  },
  {
    name: "mailer",
    protoFile: "mailer.proto",
    package: "mailer",
    serviceName: "MailerService",
    url: process.env.MAILER_SERVICE_URL || "mailer-service:50051",
  },
  {
    name: "identity",
    protoFile: "identity.proto",
    package: "identity",
    serviceName: "IdentityService",
    url: process.env.IDENTITY_SERVICE_URL || "identity-service:50051",
  },
  {
    name: "portfolio",
    protoFile: "portfolio.proto",
    package: "portfolio",
    serviceName: "PortfolioService",
    url: process.env.PORTFOLIO_SERVICE_URL || "portfolio-service:50051",
  },
  {
    name: "search",
    protoFile: "search.proto",
    package: "search",
    serviceName: "SearchService",
    url: process.env.SEARCH_SERVICE_URL || "search-service:50051",
  },
  {
    name: "files",
    protoFile: "files.proto",
    package: "files",
    serviceName: "FilesService",
    url: process.env.FILES_SERVICE_URL || "files-service:50051",
  },
  {
    name: "collaboration",
    protoFile: "collaboration.proto",
    package: "collaboration",
    serviceName: "CollaborationService",
    url: process.env.COLLABORATION_SERVICE_URL || "collaboration-service:50051",
  },
];

const generateIndexTemplate = (config: ServiceConfig): string => {
  return `import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ClientOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import * as path from 'path';

export const PROTO_PATH = path.join(__dirname, '${config.protoFile}');

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: '${config.package}',
    url: process.env.${config.name.toUpperCase()}_SERVICE_URL || '${
    config.url
  }',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: [__dirname],
    },
  },
};

export const serverOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: '${config.package}',
    url: '0.0.0.0:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: [__dirname],
    },
  },
};

export const create${config.serviceName} = () => {
  const packageDefinition = protoLoader.loadSync(
    clientOptions.options.protoPath as string,
    clientOptions.options.loader
  );
  const proto: any = grpc.loadPackageDefinition(packageDefinition);
  return new proto.${config.package}.${config.serviceName}(
    clientOptions.options.url,
    grpc.credentials.createInsecure()
  );
};

export const loadProtoPackage = () => {
  const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    clientOptions.options.loader
  );
  return grpc.loadPackageDefinition(packageDefinition);
};
`;
};

const generateIndexFiles = (): void => {
  services.forEach((service) => {
    const targetDir = path.join(__dirname, "..", "..", service.name, "src");
    const indexPath = path.join(targetDir, "index.ts");

    if (!fs.existsSync(targetDir)) {
      console.error(`❌ Directory not found: ${targetDir}`);
      return;
    }

    const content = generateIndexTemplate(service);
    fs.writeFileSync(indexPath, content, "utf-8");
    console.log(`✅ Generated: ${indexPath}`);
  });

  console.log("\n🎉 All index.ts files generated successfully!");
};

generateIndexFiles();
