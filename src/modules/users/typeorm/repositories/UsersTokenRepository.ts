import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
class UsersTokenRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.findOne({
      where: {
        token,
      },
    });
    return userToken;
  }
}

export default UsersTokenRepository;
