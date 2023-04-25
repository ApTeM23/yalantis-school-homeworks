import { Request, Response } from 'express';

import { UserRepository } from '../repository/user.repository';
import { mapUserToDTO, mapDTOToUser } from '../dto/mapper';
import { UserDTO } from '../dto/user.dto';
import { User } from '../entity/User';
import { AppDataSource } from '..';

const userRepository = new UserRepository();

export class UserController {
    async getUserById(request: Request, response: Response) {
        const user = await userRepository.findById(parseInt(request.params.id, 10));

        if (!user) {
            response.status(404);
            response.end();
            return;
        }

        response.send(mapUserToDTO(user));
    }

    async getAllUsers(request: Request, response: Response) {
        const { age, addressCity, postTitle } = request.query;
        const page = 1, limit = 10;

        const queryBuilder = await AppDataSource
            .getRepository(User)
            .createQueryBuilder()
            .select('user')
            .from(User, 'user')
            .leftJoinAndSelect('user.posts', 'posts');

        if (age) {
            queryBuilder.andWhere('user.age = :age', { age });
        }

        if (addressCity) {
            queryBuilder.andWhere("user.address ->> 'city' = :addressCity", { addressCity });
        }

        if (postTitle) {
            queryBuilder.andWhere('posts.title = :postTitle', { postTitle });
        }

        const totalUsers = await queryBuilder.getCount();

        const users = await queryBuilder
            .skip((page - 1) * limit)
            .take(limit)
            .getMany();

        const userDTOs: UserDTO[] = users.map((user) => mapUserToDTO(user));

        response.status(200).json({
            users: userDTOs,
            totalUsers,
            page: Number(page),
            totalPages: Math.ceil(totalUsers / Number(limit)),
        });
    }

    async createUser(request: Request<{}, {}, UserDTO>, response: Response) {
        const newUser = await userRepository.create(mapDTOToUser(request.body));
        response.status(200).send(mapUserToDTO(newUser));
    }

    async updateUser(request: Request<{ id: string }, {}, UserDTO>, response: Response) {
        const user = await userRepository.update(parseInt(request.params.id, 10), request.body);

        if (!user) {
            response.status(404);
            response.end();
            return;
        }

        response.send(mapUserToDTO(user));
    }

    async deleteUser({ params }: Request, response: Response) {
        let user = await userRepository.findById(parseInt(params.id, 10));

        if (!user) {
            response.status(404);
            response.end();
            return;
        }

        user = await userRepository.delete(user);
        user
            ? response.send(`User ${user?.username} was deleted!`)
            : response.status(500).send(`User wasn't deleted`);
    }
}