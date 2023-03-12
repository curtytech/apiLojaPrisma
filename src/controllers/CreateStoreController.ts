import {Request, Response} from 'express';

import { prismaClient } from '../database/prismaClient';

export class CreateStoreController {
    async handle(request: Request, response: Response){
        const {name} = request.body

        const store = await prismaClient.store.create({
            data: {name}
        })

        return response.json(store);
    }
}