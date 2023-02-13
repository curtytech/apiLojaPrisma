import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetAllProductController {
  async handle(request: Request, response: Response) {
    // let id = parseInt();

    const product = await prismaClient.product.findMany({
        where: { status: true },
      });

    return response.json(product);
  }
}
