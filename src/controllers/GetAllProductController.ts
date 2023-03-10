import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetAllProductController {
  async handle(request: Request, response: Response) {

    const product = await prismaClient.product.findMany({
      where: { status: true },
      include: {
        store_product: true
      },
    });

    return response.json(product);
  }
}
