import { AuthDataSource } from '@/Data/DataSource';
import { AuthRepository } from '@/Domain/Repository';
import { AuthRequestType, AuthResponseType, CreadentialRequestType } from '@/Type';

class AuthRepositoryImpl implements AuthRepository{
  private authDataSource: AuthDataSource
  constructor(){
    this.authDataSource = new AuthDataSource();
  }
  async auth({ id, password }: AuthRequestType): Promise<AuthResponseType> {
    const data: number | string = await this.authDataSource.login({id, password})
    .then((d) => d)
    .catch((error) => error);
    if(typeof data === "number"){
      return Promise.reject(data);
    }
    return {
      token: data
    };
  }
  async getCredential({ token }: CreadentialRequestType): Promise<boolean> {
    const data = await this.authDataSource.checkCredential({token});
    if(typeof data === "boolean") return false;
    return true;
  }
}

export default AuthRepositoryImpl;