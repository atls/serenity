import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ClientOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import * as path from 'path';

export const PROTO_PATH = path.join(__dirname, 'portfolio.proto');

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'portfolio',
    url: process.env.PORTFOLIO_SERVICE_URL || 'portfolio-service:50051',
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
    package: 'portfolio',
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

export const createPortfolioService = () => {
  const packageDefinition = protoLoader.loadSync(
    clientOptions.options.protoPath as string,
    clientOptions.options.loader
  );
  const proto: any = grpc.loadPackageDefinition(packageDefinition);
  return new proto.portfolio.PortfolioService(
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
