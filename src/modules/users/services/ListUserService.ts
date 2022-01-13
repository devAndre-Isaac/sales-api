import { getCustomRepository } from 'typeorm';
import { IPaginateCustomer } from '../interfaces/users';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class ListUserService {
  public async execute(): Promise<IPaginateCustomer> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.createQueryBuilder().paginate();

    return users as IPaginateCustomer;
  }
}

export default ListUserService;
