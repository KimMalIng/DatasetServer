import { AuthRepository } from '@/Domain/Repository';
import { UserEntity } from '@/Domain/Entity';

type LoginUseCaseType = {
  id: string;
  password: string;
}

class LoginUseCase{
  constructor(private authRepository: AuthRepository){}
  async execute({id, password}: LoginUseCaseType): Promise<UserEntity>{
    if(
      typeof id === "undefined" ||
      typeof password === "undefined" ||
      id === null ||
      password === null ||
      typeof id !== "string" ||
      typeof password !== "string"
    ) return Promise.reject(400);
    try {
      const data = await this.authRepository.auth({id, password});
      return data;
    } catch (error) {
      return Promise.reject(400);
    }
  }
};

export default LoginUseCase;