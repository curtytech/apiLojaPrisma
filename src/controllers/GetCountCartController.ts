import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetCountCartController {
  async handle(request: Request, response: Response) {

    const cart = await prismaClient.cart.count({
      where: { id_user: 1 }     
    });

    return response.json(cart);
  }
}
