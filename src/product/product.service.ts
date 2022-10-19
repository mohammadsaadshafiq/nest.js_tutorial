import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isEmpty, NotFoundError } from 'rxjs';
import { Product } from './product.model';
import { Products } from '../entites/products.entiteis';
import { ObjectID } from 'mongodb';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private productRepo: Repository<Products>,
  ) {}
  products: Product[] = [];

  // insertProduct(title: string, description: string, price: number) {
  //   const prodId = Math.random().toString();
  //   const newProduct = new Product(prodId, title, description, price);
  //   this.products.push(newProduct);
  //   return prodId;
  // }
  // getAllProducts() {
  //   return [...this.products];
  // }
  // getProduct(id: string) {
  //   const product = this.products.find((product) => product.id === id);
  //   if (product == null) {
  //     throw new NotFoundError("Couldn't find a product");
  //   }
  //   return { ...product };
  // }
  // updateProduct(
  //   prodId: string,
  //   title: string,
  //   description: string,
  //   price: number,
  // ) {
  //   const product = this.getProduct(prodId);
  //   const productIndex = this.findProductIndex(prodId);
  //   const updProd = { ...product };
  //   if (title) {
  //     updProd.title = title;
  //     updProd.description = description;
  //     updProd.price = price;
  //   }
  //   const updatedProd = (this.products[productIndex] = updProd);
  //   return updatedProd;
  // }
  // removeProduct(prodId) {
  //   const productIndex = this.findProductIndex(prodId);
  //   this.products.splice(productIndex, 1);
  // }
  // private findProductIndex(prodId) {
  //   const productIndex = this.products.findIndex((x) => x.id === prodId);
  //   return productIndex;
  // }

  // With TypeORM method
  create(createProductDto: Product) {
    return this.productRepo.save(this.productRepo.create(createProductDto));
  }
  async findAll(): Promise<Products[]> {
    return this.productRepo.find();
  }
  async findOne(id: string): Promise<Products> {
    const result = await this.productRepo.findOne(new ObjectID(id));
    return result;
  }
  async remove(id: string) {
    const result = await this.productRepo.findOne(new ObjectID(id));
    return await this.productRepo.remove(result);
  }
  async update(id: string, updatedProduct: Product) {
    const productObj = await this.productRepo.findOne(new ObjectID(id));
    productObj.description = updatedProduct.description;
    productObj.title = updatedProduct.title;
    productObj.price = updatedProduct.price;
    return await this.productRepo.save(productObj);
  }
}
