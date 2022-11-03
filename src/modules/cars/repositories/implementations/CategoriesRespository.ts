import {  getRepository, getTreeRepository, Repository  } from "typeorm";
import {Category} from "../../entities/Category";
import { ICategoriesRespository,ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepository 
    implements ICategoriesRespository {
        private  repository: Repository<Category>;

        private static INSTANCE : CategoriesRepository;

        private constructor() {
            this.repository= getRepository (Category);
        }
        
        //singleton -- instacia unica
        public static getInstance() : CategoriesRepository{
            if (!CategoriesRepository.INSTANCE){
                CategoriesRepository.INSTANCE = new CategoriesRepository();
            }
            return CategoriesRepository.INSTANCE;
        }

        async create({name , description}: ICreateCategoryDTO ): Promise<void> {
            const category = this.repository.create({
                name,
                description
            });

        await this.repository.save(category);
        }

        async list(): Promise<Category[]> {
            const categories = await this.repository.find();
            return categories
        }

        async findByName(name: string): Promise<Category>{

            const category = await this.repository.findOneBy({name});
            return category;
        }

}



export {CategoriesRepository}