import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(async connection => {

    console.log("Database Synchronize ...");
    console.log("Database Synchronize Completed");
    process.exit(0)
}).catch(error => console.log(error));
