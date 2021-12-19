import { EntityRepository, Repository } from 'typeorm';
import User from '../enitites/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findByName(name: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        name,
      },
    });
    return user;
  }
}

export default UsersRepository;
