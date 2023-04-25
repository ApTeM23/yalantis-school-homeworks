import { CreatePostDto } from "../dto/create-post.dto";
import { Post } from "../entity/Post";
import { postsRepository } from "../repositories/posts.repository";
import { mapPostToDTO, mapDTOToPost } from '../dto/mapper';

class PostsService {
  async createPost(dto: CreatePostDto): Promise<Post> {
    const post = mapDTOToPost(dto);
    post.date_creation = new Date();

    return postsRepository.create(mapPostToDTO(post));
  }

  async getAll(): Promise<Post[]> {
    return postsRepository.findAll();
  }
}

export const postsService = new PostsService();
