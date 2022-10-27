import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

interface IResquest{
    name :string;
    description : string;
}


class CreateCategoryUseCase{
    constructor(private categoriesRepository: ICategoriesRespository ){}

    execute({name,description} : IResquest ): void {

        const categoryAlreadExists = this.categoriesRepository.findByName(name);
        
        if (categoryAlreadExists){
            throw new Error("Catgory already exists!")
        }
        this.categoriesRepository.create({name,description});        
    }

}

export {CreateCategoryUseCase}