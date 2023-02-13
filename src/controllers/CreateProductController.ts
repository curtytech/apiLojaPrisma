import {Request, Response} from 'express';

import { prismaClient } from '../database/prismaClient';

export class CreateProductController {
    async handle(request: Request, response: Response){
        const {name, description, price, picture0, stock, id_store} = request.body

        const product = await prismaClient.product.create({
            data: {name, description, price, picture0, stock, id_store}            
        })

        return response.json(product);
    }
}