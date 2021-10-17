import * as Yup from 'yup'

export const SigninValidator = () => {
  return Yup.object().shape({
    email: Yup.string()
      .required('Campo obrigatório')
      .email('Por favor, digite um e-mail válido!'),
    password: Yup.string().required('Campo obrigatório')
  })
}
