import { AuthRepositoryImpl } from '@/Data/Repository';
import { AuthRepository } from '@/Domain/Repository';
import { GetCredentialUseCase, LoginUseCase } from '@/Domain/UseCase';
import { UserEntity } from '@/Domain/Entity';
import { AuthRequestType } from '@/Type';

class AuthModel {
  private authRepository: AuthRepository;
  constructor(){
    this.authRepository = new AuthRepositoryImpl(); 
  }
  async login({id, password}: AuthRequestType): Promise<UserEntity>{
    try {
      const data = this.authRepository.auth({id, password});
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export default AuthModel;