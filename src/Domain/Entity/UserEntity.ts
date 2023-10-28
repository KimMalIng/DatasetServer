class UserEntity {
  constructor(
    private everyTimeToken: string,
    private id: string,
    private password: string,
    private token: string
  ) {}
}

export default UserEntity;
