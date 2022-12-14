import {Category} from "../entities/Category";

//DTO => Data transfer object
interface ICreateCategoryDTO{
    name : string;
    description : string;
}


interface ICategoriesRespository{
    findByName(name: string): Promise<Category>
    list():Promise<Category[]>
    create({name,description} : ICreateCategoryDTO):void;
    
}


export {ICategoriesRespository,ICreateCategoryDTO};