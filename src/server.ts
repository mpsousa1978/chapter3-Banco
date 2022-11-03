import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import "./database";
import { router } from "./routes";

const app = express();
app.use(express.json());

//rotas é para chamar e receber alguma requisição
app.use(router);
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerFile));

//app.use("/categories",categoriesRoutes);
// fim rotas


app.listen(3333,() => console.log("server is running!"))
