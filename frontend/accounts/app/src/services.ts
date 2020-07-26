import grpc         from 'grpc'
import path         from 'path'

import { loadSync } from '@grpc/proto-loader'

const PROTO_PATH = path.join(path.dirname(require.resolve('@protos/identity')), '../identity.proto')

const COMMON_PROTO = path.join(path.dirname(require.resolve('@protos/common')), '../common.proto')

const createIdentityService = () => {
  const packageDefinition = loadSync(PROTO_PATH, {
    arrays: true,
    includeDirs: [COMMON_PROTO],
  })

  const { identity }: any = grpc.loadPackageDefinition(packageDefinition)

  return new identity.IdentityService(
    process.env.IDENTITY_SERVICE_URL || 'identity-service:50051',
    grpc.credentials.createInsecure()
  )
}

const identityService = createIdentityService()

export const identify = body =>
  new Promise((resolve, reject) => {
    identityService.authenticate(body, (error, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })

export const register = body =>
  new Promise((resolve, reject) => {
    identityService.register(body, (error, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })

export const verifyEmail = body =>
  new Promise((resolve, reject) => {
    identityService.verifyEmail(body, (error, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })

export const resetPassword = body =>
  new Promise((resolve, reject) => {
    identityService.resetPassword(body, (error, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })

export const changePassword = body =>
  new Promise((resolve, reject) => {
    identityService.changePassword(body, (error, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })

export const createProfile = body =>
  new Promise((resolve, reject) => {
    identityService.createProfile(body, (error, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })
