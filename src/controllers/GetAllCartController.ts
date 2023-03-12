import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetAllCartController {
  async handle(request: Request, response: Response) {

    const cart = await prismaClient.cart.findMany({
      where: { id_user: 1 },
      include: {
        product: true
      },
    });

    return response.json(cart);
  }
}
