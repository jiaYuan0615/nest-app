import { DataSource } from "typeorm"
import _ from 'lodash';
import { database } from '../config/config';

const connection = new DataSource({
  type: database.type as any,
  host: database.host,
  port: _.toNumber(database.port),
  username: database.username,
  password: database.password,
  database: database.database,
})

connection.initialize()
  .then(() => console.log("Database Connection Success ..."))
  .catch(() => console.log("Database Connection Fail ..."))

export {
  connection
};