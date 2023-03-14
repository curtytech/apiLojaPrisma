import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class EditUserController {
    async handle(request: Request, response: Response) {
        let id = parseInt(request.params.id);

        const { format } = require('date-fns');

        const now = new Date();
        const formattedDate = format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

        const {
            first_name,
            last_name,
            email,
            cpf,
            zipcode,
            address,
            number,
            city,
            reference,
            state } = request.body

        const user = await prismaClient.user.update({

            where: { id },
            data: {
                first_name,
                last_name,
                email,
                cpf,
                zipcode,
                address,
                number,
                city,
                reference,
                state,
                updated_at: formattedDate
            }
        })

        return response.json(user);
    }
}

