import {Router} from "express";
import multer from "multer";
//import {v4 as uuidV4} from 'uuid';
//import { Category } from "../model/Category";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories"
import { importCategoryController } from "../modules/cars/useCases/importCategory"

//import { PostgresCategoriesRepository } from "../modules/cars/repositories/PostGresCategoriesRespository"
//import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp" //onde sera salvo o arquivo
})
//const categoriesRepository = new CategoriesRepository();

//a rota pode fic ar no server tb
//categoriesRoutes.post("/categories",(request,response) =>{



categoriesRoutes.post("/",(request,response) =>{

    return createCategoryController.handle(request,response);

    //Obs os repositorios são os responsaveis por acessar e dar a manutencao no banco de dados
    /*const {name, description} = request.body;

    //const category = new Category();  melhor para identificar o que esta passando para o model e ativa o contructor para cria ro id
    //category.name = name;
    //category.description = description;
    //category.create_at = new Date();


    const createCategoryService = new CreateCategoryUseCase(categoriesRepository);

    createCategoryService.execute({name,description});

    return response.status(201).send();
    mudou para o controller
    */

});

categoriesRoutes.post("/import",upload.single("file") ,(request, response) => {
    return importCategoryController.handle(request,response);
}
)

categoriesRoutes.get("/",(request,response) =>{
    return listCategoriesController.handle(request,response);
})


export {categoriesRoutes};