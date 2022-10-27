import {Request,Response} from "express";

import { CreateSpacificationUseCase } from "./CreateSpecificationUseCase";


class CreateSpecificationController{
    constructor(private createSpecificationUseCase : CreateSpacificationUseCase){}
    handle (request: Request, response: Response) : Response{
        const {name,description} = request.body;

        this.createSpecificationUseCase.execute({name,description})

        return response.status(201).send();
    }


}

export{CreateSpecificationController}