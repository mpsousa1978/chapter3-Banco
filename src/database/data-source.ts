import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "1234",
    database: "rentx",
    //synchronize: false,
    logging: false,
    entities: [],
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
})

//AppDataSource.initialize();

export function createConnection(host = "database"): Promise<DataSource> {
    return AppDataSource.setOptions({ host }).initialize();
  }
  
  export default AppDataSource