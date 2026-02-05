import grpc from '@grpc/grpc-js';
import { ClientOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { loadSync } from '@grpc/proto-loader';
import * as path from 'path';

export const PROTO_PATH = path.join(__dirname, 'mailer.proto');

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'mailer',
    url: process.env.MAILER_SERVICE_URL || 'mailer-service:50051',
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
    package: 'mailer',
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

export const createMailerService = () => {
  const packageDefinition = loadSync(
    clientOptions.options.protoPath as string,
    clientOptions.options.loader
  );
  const { mailer }: any = grpc.loadPackageDefinition(packageDefinition);
  return new mailer.MailerService(
    clientOptions.options.url,
    grpc.credentials.createInsecure()
  );
};

export const loadProtoPackage = () => {
  const packageDefinition = loadSync(PROTO_PATH, clientOptions.options.loader);
  return grpc.loadPackageDefinition(packageDefinition);
};
