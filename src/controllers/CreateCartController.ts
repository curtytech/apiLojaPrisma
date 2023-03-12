import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class CreateCartController {
    async handle(request: Request, response: Response) {
        const { id_product, quantity, id_user } = request.body

        const cart = await prismaClient.cart.create({
            data: {
                id_product,
                quantity,
                id_user
            }
        })

        return response.json(cart);
    }
}