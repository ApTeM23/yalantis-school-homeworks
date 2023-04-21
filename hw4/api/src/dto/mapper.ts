import { User } from '../entity/User';
import { Post } from '../entity/Post';
import { UserDTO } from './user.dto';
import { PostDTO } from './post.dto';

export function mapUserToDTO(user: User): UserDTO {
    const { id, username, email, age, info, address } = user;
    return { id, username, email, age, info, address };
}

export function mapPostToDTO(post: Post): PostDTO {
    const { id, date_creation, title, text, user } = post;
    return { id, date_creation, title, text, user: mapUserToDTO(user) };
}

export function mapDTOToUser(dto: UserDTO): User {
    const { id, username, email, age, info, address } = dto;
    return Object.assign(new User(), { id, username, email, age, info, address });
}

export function mapDTOToPost(dto: PostDTO): Post {
    const { id, date_creation, title, text, user } = dto;
    const post = Object.assign(new Post(), { id, date_creation, title, text });
    post.user = mapDTOToUser(user);
    return post;
}