import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { IRequestShow } from '../interfaces/products';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

class ShowProductService {
  public async execute({ id }: IRequestShow): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }
    return product;
  }
}

export default ShowProductService;
