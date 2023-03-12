import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class DeleteCartController {
    async handle(request: Request, response: Response) {
        let id = parseInt(request.params.id);

        const cart = await prismaClient.cart.delete({
            where: {
                id,
            }
        })

        return response.json(cart);
    }
}