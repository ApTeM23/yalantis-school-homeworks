import { AppDataSource } from "../index";
import { Post } from '../entity/Post';

export class PostRepository {
    async findAll(): Promise<Post[]> {
        const postRepository = AppDataSource.getRepository(Post);
        return postRepository.find({ relations: ['user'] });
      }
    
      async findById(id: number): Promise<Post | null> {
        const postRepository = AppDataSource.getRepository(Post);
        return postRepository.findOneBy({ id });
      }
    
      async create(post: Post): Promise<Post> {        
        const postRepository = AppDataSource.getRepository(Post);
        return postRepository.save(post);
      }
}
