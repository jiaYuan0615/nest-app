import "reflect-metadata";
import { ConnectionOptions, getConnectionOptions } from "typeorm";
import { createDatabase } from 'typeorm-extension';

(async () => {
    const connection: ConnectionOptions = await getConnectionOptions();
    const options = {
        ifNotExist: true,
        charset: "utf8mb4_general_ci",
        characterSet: "utf8mb4"
    }
    // mysql
    await createDatabase(options, connection);

    // postgres
    // await createDatabase({ifNotExist: true, characterSet: "UTF8"});
})();