import { EmailAndPasswordParams } from '@/Domain/Models'

export interface Authentication {
  signinWithEmailAndPassword: (params: EmailAndPasswordParams) => Promise<any>
  signinWithGoogle: () => Promise<any>
  createAccount: (params: EmailAndPasswordParams) => Promise<any>
}
