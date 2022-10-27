import { Specification } from "../model/Specification";

interface ISpecificationDTO{
    name : string;
    description : string;
}

interface ISpecificationRespository{
    create({name, description } : ISpecificationDTO): void;
    findByname(name:string):Specification;
}


 
export {ISpecificationRespository,ISpecificationDTO};