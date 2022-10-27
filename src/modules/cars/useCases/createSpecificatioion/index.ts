import { SpecificationRepository } from "../../repositories/implementations/SpecificationRespository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpacificationUseCase } from "./CreateSpecificationUseCase";

const specificationRespository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpacificationUseCase(specificationRespository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export {createSpecificationController};

