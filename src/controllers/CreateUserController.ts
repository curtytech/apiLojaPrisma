import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        const user = await prismaClient.user.create({
            data: {
                email, password, profile: 1
            }
        })

        return response.json(user);
    }
}