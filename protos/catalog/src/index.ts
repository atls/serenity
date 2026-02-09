import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ClientOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import * as path from 'path';

export const PROTO_PATH = path.join(__dirname, 'catalog.proto');

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'catalog',
    url: process.env.CATALOG_SERVICE_URL || 'catalog-service:50051',
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
    package: 'catalog',
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

export const createCatalogService = () => {
  const packageDefinition = protoLoader.loadSync(
    clientOptions.options.protoPath as string,
    clientOptions.options.loader
  );
  const proto: any = grpc.loadPackageDefinition(packageDefinition);
  return new proto.catalog.CatalogService(
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
