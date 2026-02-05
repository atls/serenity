import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ClientOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import * as path from 'path';

export const PROTO_PATH = path.join(__dirname, 'search.proto');

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'search',
    url: process.env.SEARCH_SERVICE_URL || 'search-service:50051',
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
    package: 'search',
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

export const createSearchService = () => {
  const packageDefinition = protoLoader.loadSync(
    clientOptions.options.protoPath as string,
    clientOptions.options.loader
  );
  const proto: any = grpc.loadPackageDefinition(packageDefinition);
  return new proto.search.SearchService(
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
