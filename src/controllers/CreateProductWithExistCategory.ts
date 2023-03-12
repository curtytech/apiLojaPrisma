import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductWithExistCategory {
  async handle(request: Request, response: Response) {
    const { name, description, price, stock, picture0, id_category, id_store } = request.body;

    const productCategory = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            name,
            description,
            price,
            stock,
            id_store,
            picture0,
          },
        },
        category: {
          connect: {
            id: id_category,
          },
        },
      },
    });

    return response.json(productCategory);
  }
}
