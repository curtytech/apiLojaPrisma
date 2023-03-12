import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetAllStoreController {
  async handle(request: Request, response: Response) {
    // let id = parseInt();

    const store = await prismaClient.store.findMany({
        where: { status: true },
      });

    return response.json(store);
  }
}
