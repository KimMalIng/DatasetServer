class UserEntity {
  private everyTimeToken: string;

  private id: string;

  private password: string;

  private token: string;

  constructor(
    everyTimeToken: string,
    id: string,
    password: string,
    token: string
  ) {
    this.everyTimeToken = everyTimeToken;
    this.id = id;
    this.password = password;
    this.token = token;
  }
}

export default UserEntity;
