import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindProductController {
  async handle(request: Request, response: Response) {
    let id = parseInt(request.params.id);

    const product = await prismaClient.product.findFirst({
      where: {
        id,
      }, include: {
        store_product: true,
        ProductCategory: { include: { category: true } }
      }
    });

    // const product = await prismaClient.productCategory.findFirst({
    //   where: {
    //     id_product,
    //   }, include: {        
    //     category: true,
    //     product: {
    //       include: {
    //         store_product: true,            
    //       }
    //     },
    //   }
    // });

    return response.json(product);
  }
}
