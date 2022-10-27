import { ISpecificationRespository } from "../../repositories/ISpecificationRespository";

interface IRequest{
    name : string;
    description : string;
}

class CreateSpacificationUseCase{
    constructor(private specificationRepository:ISpecificationRespository){}

    execute({name,description}: IRequest):void{
        const specificationAlredyExists = this.specificationRepository.findByname(name);
        if (specificationAlredyExists){
            throw new Error("Specification already exists!")
            //return response.status(400).json({error: "Category already exists!"})
        }

        this.specificationRepository.create({
            name,
            description
        })
    }


}


export {CreateSpacificationUseCase}