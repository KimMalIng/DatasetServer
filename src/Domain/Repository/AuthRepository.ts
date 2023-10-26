import { AuthRequestType, AuthResponseType } from '@/Type';

interface AuthRepository {
  auth({ id, password }: AuthRequestType): Promise<AuthResponseType>;
  getCredential({ token }: AuthResponseType): Promise<boolean>;
}

export default AuthRepository;
