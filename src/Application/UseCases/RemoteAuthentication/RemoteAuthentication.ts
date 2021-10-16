import 'reflect-metadata'
import { injectable } from 'inversify'

import { Firebase } from '@/Infra'
import { Authentication } from '@/Domain/UseCases'
import { EmailAndPasswordParams } from '@/Domain/Models'

@injectable()
export class RemoteAuthentication implements Authentication {
  async createAccount(params: EmailAndPasswordParams): Promise<any> {
    Firebase.createUserWithEmailAndPassword(
      Firebase.auth,
      params.email,
      params.password
    )
      .then((userCredentials) => {
        return userCredentials
      })
      .catch((error) => {
        return {
          statusCode: error?.statusCode,
          message: error?.message
        }
      })
  }

  async signinWithEmailAndPassword(
    params: EmailAndPasswordParams
  ): Promise<any> {
    Firebase.signInWithEmailAndPassword(
      Firebase.auth,
      params.email,
      params.password
    )
      .then((userCredentials) => {
        return userCredentials
      })
      .catch((error) => {
        return {
          statusCode: error?.statusCode,
          message: error?.message
        }
      })
  }

  async signinWithGoogle(): Promise<any> {
    Firebase.signInWithPopup(Firebase.auth, new Firebase.googleAuthProvider())
      .then((result) => {
        const credential =
          Firebase.googleAuthProvider.credentialFromResult(result)

        return {
          token: credential?.accessToken,
          user: result?.user
        }
      })
      .catch((error) => {
        return {
          statusCode: error?.statusCode,
          message: error?.message
        }
      })
  }
}