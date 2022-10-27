import { CategoriesRepository } from "../../repositories/implementations/CategoriesRespository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRetository = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCategoryUseCase(categoriesRetository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export {importCategoryController};
