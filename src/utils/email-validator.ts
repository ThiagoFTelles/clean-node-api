import { EmailValidator } from "../presentation/protocols/email-validator";
import validator from "validator";

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email)
  }
}
// TODO: quando a internet voltar: npm i @types/validator -D
// Parei na aula criando email validator adapter 17:16
// TODO: fazer o outro commit em 14:14
// 15:27 const makeSut = (): EmailValidatorAdapter => {
//   return new EmailValidatorAdapter()
// }
