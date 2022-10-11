import { Injectable } from '@nestjs/common';
import { isEmpty, NotFoundError } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    return prodId;
  }
  getAllProducts() {
    return [...this.products];
  }
  getProduct(id: string) {
    const product = this.products.find((product) => product.id === id);
    if (product == null) {
      throw new NotFoundError("Couldn't find a product");
    }
    return { ...product };
  }
  updateProduct(
    prodId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const product = this.getProduct(prodId);
    const productIndex = this.findProductIndex(prodId);
    const updProd = { ...product };
    if (title) {
      updProd.title = title;
      updProd.description = description;
      updProd.price = price;
    }
    const updatedProd = (this.products[productIndex] = updProd);
    return updatedProd;
  }
  removeProduct(prodId) {
    const productIndex = this.findProductIndex(prodId);
    this.products.splice(productIndex, 1);
  }
  private findProductIndex(prodId) {
    const productIndex = this.products.findIndex((x) => x.id === prodId);
    return productIndex;
  }
}
