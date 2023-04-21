import "reflect-metadata";

import express, { Express } from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";

import { DataSource } from "typeorm";
import { Request, Response } from "express";

import { AppRoutes } from "./routes";


dotenv.config();

export const AppDataSource = new DataSource({
	type: "postgres",
    host: process.env.POSTGRES_HOST as string,
    port: parseInt(process.env.POSTGRES_PORT as string, 10) as number,
    username: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DATABASE as string,
    synchronize: false,
    entities: ["dist/entity/*.js"],
    migrations: ["dist/migration/*.js"],
    migrationsRun: true
})

AppDataSource.initialize()
	.then(async connection => {

		const app = express();
		app.use(bodyParser.json());		

		AppRoutes.forEach(route => {
			app[route.method as keyof Express](route.path, (request: Request, response: Response, next: Function) => {
				route.action(request, response)
					.then(() => next)
					.catch((err: any) => next(err));
			});
		});

		app.listen(8000);

		console.log("Express application is up and running on port http://localhost:8000");

	}).catch(error => console.log("TypeORM connection error: ", error));