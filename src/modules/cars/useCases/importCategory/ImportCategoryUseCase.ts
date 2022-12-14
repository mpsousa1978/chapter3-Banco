import { parse as csvParse } from "csv-parse";

import fs from "fs";
import { Category } from "../../entities/Category";
import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

interface IImpportCategory{
    name : string;
    description : string;
}


class ImportCategoryUseCase{
    constructor(private categoriesRetository: ICategoriesRespository ){}

    loadCategories(file:Express.Multer.File):  Promise<IImpportCategory[]> {
        return new Promise((resolve,reject) =>{ //promise, aguarda fazer o processamento para depois ir para o proximo processo
            const stream = fs.createReadStream(file.path);
            const categories : IImpportCategory[] = [];
            const parseFile = csvParse();
    
            stream.pipe(parseFile); 
    
            parseFile.on("data",async (line)=>{
                //["name","description"]
                const [name,description] = line;
                categories.push({
                    name,description
                });
            }).on ("end",()=>{
                fs.promises.unlink(file.path);
                resolve(categories);
            }).on("Error",(err) =>{
                reject (err);
            })
        }
        )
    }

    async execute(file: Express.Multer.File ) :Promise<void> {
        const categories = await this.loadCategories(file);
        
    categories.map(async category =>{
        const {name, description }  = category;
        const existsCategory = this.categoriesRetository.findByName(name);

        if (!existsCategory)  {
            this.categoriesRetository.create({
                name,description
            })
        }
    })
    }
}

export {ImportCategoryUseCase}