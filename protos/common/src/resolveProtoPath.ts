import path              from 'node:path'
import { fileURLToPath } from 'node:url'

const toPath = (specifier: string): string =>
  specifier.startsWith('file:') ? fileURLToPath(specifier) : specifier

export const resolveProtoPath = (packageName: string, fileName: string): string =>
  path.join(path.dirname(toPath(import.meta.resolve(packageName))), '..', fileName)
