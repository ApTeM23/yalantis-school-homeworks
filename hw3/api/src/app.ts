import 'reflect-metadata';
import express, { Express } from 'express';
import { Server } from 'http';
import { json } from 'body-parser';

import { UserController } from './controllers/users.controller';

export class App {
	app: Express;
	server: Server;
	port: number;
	userController: UserController;

	constructor(
		userController: UserController,
	) {
		this.app = express();
		this.app.use(json());
		this.port = 8000;
		this.userController = userController;
	}

	useRoutes(): void {
		this.app.use('/users', this.userController.router);
	}

	public async init(): Promise<void> {
		this.useRoutes();
		this.server = this.app.listen(this.port);
		console.log(`Сервер запущен на http://localhost:${this.port}`);
	}

	public close(): void {
		this.server.close();
	}
}
