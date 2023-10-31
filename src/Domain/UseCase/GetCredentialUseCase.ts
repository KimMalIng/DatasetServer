import { AuthRepository } from '@/Domain/Repository';

type GetCredentialUseCaseType = {
  token: string;
};

class GetCredentialUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute({ token }: GetCredentialUseCaseType): Promise<boolean> {
    try {
      const data = await this.authRepository.getCredential({ token });
      return data;
    } catch (error) {
      if(error instanceof Error){
        return Promise.reject(new Error(error.message));
      }
      return Promise.reject(new Error("500"));
    }
  }
}

export default GetCredentialUseCase;
