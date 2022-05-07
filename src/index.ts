import 'reflect-metadata';
import { createDatabase } from 'typeorm-extension';

(async () => await createDatabase())();