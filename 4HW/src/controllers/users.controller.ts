//     async getAllUsers(request: Request, response: Response) {
//         const { age, addressCity, postTitle } = request.query;
//         const page = 1, limit = 10;

//         const queryBuilder = await AppDataSource
//             .getRepository(User)
//             .createQueryBuilder()
//             .select('user')
//             .from(User, 'user')
//             .leftJoinAndSelect('user.posts', 'posts');

//         if (age) {
//             queryBuilder.andWhere('user.age = :age', { age });
//         }

//         if (addressCity) {
//             queryBuilder.andWhere("user.address ->> 'city' = :addressCity", { addressCity });
//         }

//         if (postTitle) {
//             queryBuilder.andWhere('posts.title = :postTitle', { postTitle });
//         }

//         const totalUsers = await queryBuilder.getCount();

//         const users = await queryBuilder
//             .skip((page - 1) * limit)
//             .take(limit)
//             .getMany();

//         // const userDTOs: UserDTO[] = users.map((user) => mapUserToDTO(user));

//         response.status(200).json({
//             // users: userDTOs,
//             totalUsers,
//             page: Number(page),
//             totalPages: Math.ceil(totalUsers / Number(limit)),
//         });
//     }


import { Router } from "express";

import { asyncWrapper } from "src/shared/middlewares/async-wrapper";
import { validateReq } from "src/shared/middlewares/validate";

import { usersService } from "../services/users.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { mapUserToDTO } from '../dto/mapper';

const router = Router();

router.get(
    "/",
    asyncWrapper(async ({ query }, res) => {
        const page = 1, limit = 10;
        const users = await usersService.getAll(query, page, limit);
        const totalUsers = await usersService.countUsers();
        const userDTOs = users.map((user) => mapUserToDTO(user));

        res.status(200).json({
            users: userDTOs,
            totalUsers,
            page: Number(page),
            totalPages: Math.ceil(totalUsers / Number(limit)),
        });
    })
)

router.get(
    "/:id",
    asyncWrapper(async ({ params }, res) => {
        const user = await usersService.getOne(parseInt(params.id, 10));
        if (!user) {
            res.status(400).send("User not exist");
            return;
        }
        res.status(200).send(mapUserToDTO(user)).json();
    })
);

router.post(
    "/",
    validateReq(CreateUserDto),
    asyncWrapper(async (req, res) => {
        const user = await usersService.createUser(req.body);
        res.status(201).send(mapUserToDTO(user));
    })
);

router.delete(
    "/:id",
    asyncWrapper(async ({ params }, res) => {
        const user = await usersService.deleteUser(parseInt(params.id, 10));
        if (!user) {
            res.status(400).send("User not exist");
            return;
        }
        res.status(200).send(mapUserToDTO(user)).json();
    })
);

router.put(
    "/:id",
    asyncWrapper(async ({ params, body }, res) => {
        const user = await usersService.updateUser(parseInt(params.id, 10), body);
        if (!user) {
            res.status(400).send("User not exist");
            return;
        }
        res.status(200).send(mapUserToDTO(user)).json();
    })
);

export const usersController = router;