import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, Repository } from 'typeorm';
import { Product } from './product.model';
import { Products } from '../entites/products.entiteis';
global.crypto = require('crypto');

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private productRepo: MongoRepository<Products>,
  ) {}
  products: Product[] = [];

  // With TypeORM method
  create(createProductDto: Product) {
    createProductDto.productId = crypto.randomUUID();
    return this.productRepo.save(createProductDto); //use update with upsert
  }
  async findAll(): Promise<Products[]> {
    return this.productRepo.find();
  }
  async findOne(productId: string): Promise<Products> {
    const result = await this.productRepo.findOneBy({ productId }); //remove
    return result;
  }
  async remove(productId: string) {
    const result = await this.productRepo.findOneBy({ productId });
    return await this.productRepo.remove(result);
  }
  async update(productId: string, updatedProduct: Product) {
    const productObj = await this.productRepo.findOneBy({ productId });
    productObj.description = updatedProduct.description;
    productObj.title = updatedProduct.title;
    productObj.price = updatedProduct.price;
    return await this.productRepo.save(productObj); //update it
  }

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
}
