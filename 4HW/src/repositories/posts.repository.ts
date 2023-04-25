import { Post } from '../entity/Post';
import { getConnection } from "src/database";
import { DeepPartial } from "typeorm";

class PostsRepository {
  get repository() {
    return getConnection().getRepository(Post);
  }

  async findAll(): Promise<Post[]> {
    return this.repository.find({ relations: ['user'] });
  }

  async create(post: DeepPartial<Post>): Promise<Post> {
    return this.repository.save(post);
  }
}

export const postsRepository = new PostsRepository();
