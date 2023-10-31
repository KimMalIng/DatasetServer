import { AuthDataSource } from '@/Data/DataSource';
import { AuthRepository } from '@/Domain/Repository';
import { UserEntity } from '@/Domain/Entity';
import { AuthRequestType, AuthResponseType } from '@/Type';

class AuthRepositoryImpl implements AuthRepository {
  private authDataSource: AuthDataSource;

  constructor() {
    this.authDataSource = new AuthDataSource();
  }

  async isAuth({
    id,
    password,
  }: AuthRequestType): Promise<UserEntity | boolean> {
    try {
      const data = await this.authDataSource.isAuth({ id, password });
      if (typeof data === 'boolean') return false;
      return data;
    } catch (error) {
      return Promise.reject(new Error("500"));
    }
  }

  async auth({ id, password }: AuthRequestType): Promise<UserEntity> {
    const data: UserEntity | string = await this.authDataSource
      .login({ id, password })
      .then((d) => d)
      .catch((error: unknown) => {
        if(error instanceof Error){
          return error.message;
        }
        return "500";
      });
    if (typeof data === 'string') {
      return Promise.reject(new Error(data));
    }
    return data;
  }

  async getCredential({ token }: AuthResponseType): Promise<boolean> {
    const data = await this.authDataSource.checkCredential({ token });
    if (typeof data === 'boolean') return false;
    return true;
  }
}

export default AuthRepositoryImpl;
