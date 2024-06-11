export type TCustomer = {
  _id?: string
  brandId?: string
  name: string
  surname: string
  cpf: string
  phone: string
  email: string
  birthdate: string
  password?: string
  passwordConfirmation?: string
  oldPassword?: string
  zipCode: string
  gender: string
  street: string
  complement: string
  number: string
  state: string
  city: string
  district: string
  acceptTermsPrivacyPolicy: boolean
  acceptMediaConsent: boolean
}