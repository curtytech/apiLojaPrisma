import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class LoginController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const user = await prismaClient.user.findFirst({
      where: {
        email, password
      }
    });

    if (user == null) {
      return response.json('Login ou senha Incorretos!');
      console.log('Login ou senha Incorretos!');
    } else {
      return response.json(user);
    }

  }
}
