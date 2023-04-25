import { User } from '../entity/User';
import { Post } from '../entity/Post';
import { CreatePostDto } from './create-post.dto';
import { CreateUserDto } from './create-user.dto';

export function mapUserToDTO(user: User): CreateUserDto {
    const { id, username, email, age, info, address } = user;
    return { id, username, email, age, info, address };
}

export function mapPostToDTO(post: Post): CreatePostDto {
    const { id, date_creation, title, text, user } = post;
    return { id, date_creation, title, text, user };
}

export function mapDTOToUser(dto: CreateUserDto): User {
    const { id, username, email, age, info, address } = dto;
    return Object.assign(new User(), { id, username, email, age, info, address });
}

export function mapDTOToPost(dto: CreatePostDto): Post {
    const { id, date_creation, title, text, user } = dto;
    const post = Object.assign(new Post(), { id, date_creation, title, text, user });
    return post;
}