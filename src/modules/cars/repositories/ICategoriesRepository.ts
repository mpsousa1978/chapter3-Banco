import {Category} from "../model/Category";

//DTO => Data transfer object
interface ICreateCategoryDTO{
    name : string;
    description : string;
}


interface ICategoriesRespository{
    create({name,description} : ICreateCategoryDTO):void;
    findByName(name: string): Category;
    list():Category[];
    
}


export {ICategoriesRespository,ICreateCategoryDTO};