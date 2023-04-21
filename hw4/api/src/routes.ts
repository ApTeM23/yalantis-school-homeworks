import { PostController } from './controller/post.controller';
import { UserController } from './controller/user.controller';

const userController = new UserController();
const postController = new PostController();

export const AppRoutes = [
    {
        path: "/users",
        method: "get",
        action: userController.getAllUsers
    },
    {
        path: "/users/:id",
        method: "get",
        action: userController.getUserById
    },
    {
        path: "/users",
        method: "post",
        action: userController.createUser
    },
    {
        path: "/users/:id",
        method: "put",
        action: userController.updateUser
    },
    {
        path: "/users/:id",
        method: "delete",
        action: userController.deleteUser
    },
    {
        path: "/posts",
        method: "get",
        action: postController.getAllPosts
    },
    {
        path: "/posts",
        method: "post",
        action: postController.createPost
    },
];