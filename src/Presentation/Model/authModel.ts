import { AuthRepositoryImpl } from '@/Data/Repository';
import { AuthRepository } from '@/Domain/Repository';
import { GetCredentialUseCase, LoginUseCase } from '@/Domain/UseCase';
import { UserEntity } from '@/Domain/Entity';
import { AuthRequestType, AuthResponseType } from '@/Type';

class AuthModel {
  private authRepository: AuthRepository;
  private loginUseCase: LoginUseCase;
  private getCredentiallUseCase: GetCredentialUseCase;

  constructor(){
    this.authRepository = new AuthRepositoryImpl(); 
    this.loginUseCase = new LoginUseCase(this.authRepository);
    this.getCredentiallUseCase = new GetCredentialUseCase(this.authRepository);
  }
  async login({id, password}: AuthRequestType): Promise<UserEntity>{
    try {
      const data = await this.loginUseCase.execute({id, password});
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getCredential({token}: AuthResponseType): Promise<boolean>{
    try {
      const data = await this.getCredentiallUseCase.execute({token});
      return data;
    } catch (error) {
      return false;
    }
  }
};

export default AuthModel;