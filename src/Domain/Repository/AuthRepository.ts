import { AuthRequestType, AuthResponseType } from '@/Type';
import { UserEntity } from '@/Domain/Entity';

interface AuthRepository {
  auth({ id, password }: AuthRequestType): Promise<UserEntity>;
  getCredential({ token }: AuthResponseType): Promise<boolean>;
  isAuth({ id, password }: AuthRequestType): Promise<UserEntity | boolean>;
}

export default AuthRepository;
