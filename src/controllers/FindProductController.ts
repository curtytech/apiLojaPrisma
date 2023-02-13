import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindProductController {
  async handle(request: Request, response: Response) {
    let id = parseInt(request.params.id);

    const product = await prismaClient.product.findFirst({
      where: {
        id,
      },
    });

    return response.json(product);
  }
}
