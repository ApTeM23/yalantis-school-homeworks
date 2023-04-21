import 'reflect-metadata';
import { App } from './app';

import { UserController } from './controllers/users.controller';
import { UserService } from './services/users.service';

export interface IBootstrapReturnType {
	app: App;
}

async function bootstrap(): Promise<IBootstrapReturnType> {
	let userService = new UserService();
	const app = new App(
		new UserController(userService)
	);
	await app.init();
	return { app };
}

export const boot = bootstrap();