import { Specification } from "../../entities/Specification";

import { ISpecificationDTO, ISpecificationRespository } from "../ISpecificationRespository";




class SpecificationRepository implements ISpecificationRespository{
    private specification: Specification[];

    constructor(){
        this.specification = [];
    }

    create({ name, description }: ISpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification,{
            name,
            description,
            create_at : new Date()
        });
        this.specification.push(specification);
    }
    findByname(name: string): Specification {
        const specification = this.specification.find((specification)=> specification.name === name);
        return specification;
    }


}

export {SpecificationRepository};