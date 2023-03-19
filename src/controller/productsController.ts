import { Request, Response } from 'express'
import productService from '../service/productsService'
import {readFile} from 'fs/promises'

class ProductController{  
    
    async create(req: Request, res: Response){
        await productService.createProductList(req.body)
        return res.status(201).send()
    }

    async list(req: Request, res: Response) {
        const productLista = res.json(await productService.listProducts())
        return productLista      
    }

    async productStock(req: Request, res: Response) {
        const productStock = res.json(await productService.getStock())
        return productStock      
    }
}

export default new ProductController()