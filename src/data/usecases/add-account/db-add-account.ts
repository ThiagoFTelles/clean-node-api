import { AddAccount, AddAccountModel } from "../../../domain/usecases/add-account";
import { AccountModel } from "../../../domain/models/account";
import { Encrypter } from "./protocols/encrypter";

export class DbAddAccount implements AddAccount{
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const fakeAccount: AccountModel = {
      id: '1',
      name: 'valid_name',
      email: 'valid_email',
      password: 'hashed_password'
    }
    await this.encrypter.encrypt(accountData.password)
    return new Promise(resolve => resolve(fakeAccount))
  }
}
