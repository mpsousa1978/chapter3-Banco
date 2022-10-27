import {Category} from "../../model/Category";
import { ICategoriesRespository,ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepository implements ICategoriesRespository {
    private categories: Category[];
    private static INSTANCE : CategoriesRepository;

    private constructor (){
        this.categories = [];
    }
    
    //singleton -- instacia unica
    public static getInstance() : CategoriesRepository{
        if (!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }

    create({name , description}: ICreateCategoryDTO ): void {
        const category = new Category();

        Object.assign(category, {
           //id : uuidV4(),
           name,
           description,
           create_at : new Date()
       });
   
       this.categories.push(category)        
    }

    list(): Category[]{
        return this.categories;
    }

    findByName(name: string): Category{
        const category = this.categories.find((category) => category.name === name);
        return category;
    }

}



export {CategoriesRepository}