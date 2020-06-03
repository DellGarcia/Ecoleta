import { Request, Response } from 'express';
import knexConnection from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knexConnection('items').select('*');
    
        const serilializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            };
        })
    
        return response.json(serilializedItems);
    }
}

export default ItemsController;