import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: "docker",
    password: "1234",
    database: "rentx",
    migrations: ["src/database/migrations/*.ts"],
})

//AppDataSource.initialize();

AppDataSource.initialize().then(async () => {
    console.log("Initializing the database...")
}).catch((err)=> console.log(err))