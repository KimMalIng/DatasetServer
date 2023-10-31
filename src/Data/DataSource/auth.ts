import axios from 'axios';
import randomString from 'randomstring';

import { UserModel } from '@/DB';
import { UserEntity } from '@/Domain/Entity';
import { DATA_SERVER } from '@/Const';
import { UserRequestType, CheckCredentialRequestType } from '@/Data/Model';

class AuthDataSource {
  static async EveryTimeLogin({
    id,
    password,
  }: UserRequestType): Promise<string> {
    const isTrueAccount: string | number = await axios
      .post(`${DATA_SERVER}/everytime/auth`, {
        id,
        password,
      })
      .then((data) => data.data.token)
      .catch((error) => {
        if (error.response.status === 400) {
          return 400;
        }
        if (error.response.status === 401) {
          return 401;
        }
        return 500;
      });
    if (typeof isTrueAccount === 'number') {
      return Promise.reject(new Error(String(isTrueAccount)));
    }
    return isTrueAccount;
  }

  static async checkCredential({
    token,
  }: CheckCredentialRequestType): Promise<boolean | string> {
    try {
      const userData = await UserModel.findOne({ token }).lean();
      if (userData === null) return false;
      const everytimeToken = await this.EveryTimeLogin({
        id: userData.id,
        password: userData.password,
      });
      if (everytimeToken !== userData.everyTimeToken) {
        await UserModel.updateOne(
          { token },
          { $set: { everyTimeToken: everytimeToken } }
        );
      }
      return userData.token;
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === '401' || error.message === '400')
          return Promise.reject(new Error(error.message));
      }
      return Promise.reject(new Error('501'));
    }
  }

  static async login({ id, password }: UserRequestType): Promise<UserEntity> {
    try {
      const everyTimeToken = await this.EveryTimeLogin({ id, password });
      const token = randomString.generate(16);
      const saveUser = new UserModel({ id, password, token, everyTimeToken });
      await saveUser.save();
      return new UserEntity(everyTimeToken, id, password, token);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === '401' || error.message === '400')
          return Promise.reject(new Error(error.message));
      }
      return Promise.reject(new Error('501'));
    }
  }

  static async isAuth({
    id,
    password,
  }: UserRequestType): Promise<boolean | UserEntity> {
    try {
      const data = await UserModel.findOne({ id, password }).lean();
      if (data === null) return false;
      return new UserEntity(
        data.everyTimeToken,
        data.id,
        data.password,
        data.token
      );
    } catch (error) {
      return Promise.reject(new Error('500'));
    }
  }
}

export default AuthDataSource;
