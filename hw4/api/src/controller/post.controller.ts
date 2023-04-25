import { Request, Response } from 'express';

import { UserRepository } from '../repository/user.repository';
import { PostRepository } from '../repository/post.repository';
import { mapPostToDTO, mapDTOToPost } from '../dto/mapper';
import { PostDTO } from '../dto/post.dto';
import { Post } from '../entity/Post';

const postRepository = new PostRepository();
const userRepository = new UserRepository();

export class PostController {
    async getAllPosts(request: Request, response: Response) {
        const posts = await postRepository.findAll();
        const postDTOs = posts.map((post) => mapPostToDTO(post));
    
        response.json(postDTOs);
    }

    async createPost(request: Request<{}, {}, PostDTO>, response: Response): Promise<void> {
        const { user, title, text } = request.body;

        const findedUser = await userRepository.findById(user.id);

        if (!findedUser) {
            response.status(404);
            response.end();
            return;
        }

        const post = new Post();
        post.date_creation = new Date();
        post.title = title;
        post.text = text;
        post.user = findedUser;

        const savedPost = await postRepository.create(post);
        const postDTO: PostDTO = mapPostToDTO(savedPost);

        response.status(201).json(postDTO);
    }
}