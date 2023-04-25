import { ParsedQs } from 'qs';
import { getConnection } from "src/database";
import { DeepPartial } from "typeorm";

import { User } from '../entity/User';

class UserRepository {
    get repository() {
        return getConnection().getRepository(User);
    }

    async count(): Promise<number> {
        return await this.repository.count();
    }

    async findAll(query: ParsedQs, page: number, limit: number): Promise<User[]> {
        const { age, addressCity, postTitle } = query;

        const queryBuilder = this.repository
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
            queryBuilder.andWhere("\"posts\".\"title\" = :postTitle", { postTitle });
        }

        const users = await queryBuilder
            .skip((page - 1) * limit)
            .take(limit)
            .getMany();

        return users;
    }

    async findById(id: number): Promise<User | null> {
        return await this.repository.findOneBy({ id });
    }

    async create(user: DeepPartial<User>): Promise<User> {
        return await this.repository.save(user);
    }

    async update(id: number, user: Partial<User>): Promise<User | null> {
        const result = await this.repository.update(id, user);
        if (result.affected === 0) return null;
        return await this.repository.findOneBy({ id });
    }

    async delete(user: User): Promise<User> {
        return await this.repository.remove(user);
    }
}

export const usersRepository = new UserRepository();

