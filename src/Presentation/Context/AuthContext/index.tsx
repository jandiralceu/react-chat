import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'
import { useInjection } from 'inversify-react'

import { EmailAndPasswordParams } from '@/Domain/Models'
import { RemoteAuthentication } from '@/Application/UseCases'

type AuthContextProps = {
  currentUser?: any
  createAccount?: (params: EmailAndPasswordParams) => Promise<any>
  signinWithEmailAndPassword: (params: EmailAndPasswordParams) => Promise<any>
  signinWithGoogle: () => Promise<any>
  signOut: () => Promise<any>
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  signinWithEmailAndPassword: (params: EmailAndPasswordParams) => {
    return Promise.resolve()
  },
  signinWithGoogle: () => {
    return Promise.resolve()
  },
  signOut: () => {
    return Promise.resolve()
  }
})

export const useAuthentication = () => useContext(AuthContext)

export const AuthProvider = ({ children }: PropsWithChildren<any>) => {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const authServices = useInjection(RemoteAuthentication)

  const createAccount = (params: EmailAndPasswordParams) =>
    authServices.createAccount(params)

  const signinWithEmailAndPassword = (params: EmailAndPasswordParams) =>
    authServices.signinWithEmailAndPassword(params)

  const signinWithGoogle = () => authServices.signinWithGoogle()

  const signOut = () => authServices.signOut()

  useEffect(() => {
    authServices.verifyUser().then((user) => {
      setCurrentUser(user ?? null)
    })
  }, [currentUser])

  return (
    <AuthContext.Provider
      value={{
        signOut,
        currentUser,
        createAccount,
        signinWithGoogle,
        signinWithEmailAndPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
