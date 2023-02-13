import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetAllCategoryController {
  async handle(request: Request, response: Response) {
    // let id = parseInt();

    const category = await prismaClient.category.findMany({
        where: { status: true },
      });

    return response.json(category);
  }
}
