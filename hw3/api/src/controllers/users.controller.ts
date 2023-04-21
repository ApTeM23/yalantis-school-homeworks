import { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';

import { BaseController } from '../common/base.controller';
import { UserService } from '../services/users.service';
import { UserCreateDto } from '../dto/user-create.dto';


export class UserController extends BaseController {
    userService: UserService;

    constructor(
        userService: UserService,
    ) {
        super();
        this.userService = userService;
        this.bindRoutes([
            {
                path: '/',
                method: 'get',
                func: this.getList,
            },
            {
                path: '/',
                method: 'post',
                func: this.create,
            },
            {
                path: '/:id',
                method: 'get',
                func: this.getById,
            },
            {
                path: '/:id',
                method: 'put',
                func: this.update,
            },
        ]);
    }

    async getList(req: Request, res: Response): Promise<void> {
        const users = await this.userService.getAllUsers();
        if (users) {
            this.ok(res, users);
        } else {
            this.send(res, 404, { error: 'List is empty' });
        }
    }

    async create(
    	{ body }: Request<{}, {}, UserCreateDto>,
    	res: Response
    ): Promise<void> {
    	await this.userService.createUser(body);
    	this.send(res, 201, { body });
    }

    async getById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const user = await this.userService.findUserById(id);
        if (user) {
            this.ok(res, { id: user.id, name: user.name });
        } else {
            this.send(res, 404, { error: 'User not found' });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const name = req.body.name;
        const user = await this.userService.findUserById(id);
        if (user == null) {
            this.send(res, 404, { error: 'User not found' });
        } else if(!name) {
            this.send(res, 400, { error: 'Name is required' });
        } else {
            this.userService.updateUser(id, name);
            this.send(res, 203, { id, name });
        }
    }
}
