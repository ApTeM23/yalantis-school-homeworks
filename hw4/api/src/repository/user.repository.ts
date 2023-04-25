import { AppDataSource } from "../index";
import { User } from '../entity/User';

export class UserRepository {
    async findAll(page: number, limit: number, age?: number, addressCity?: string, postTitle?: string): Promise<User[]> {
        const userRepository = AppDataSource.getRepository(User);
        return await userRepository.find();
    }

    async findById(id: number): Promise<User | null> {
        const userRepository = AppDataSource.getRepository(User);
        return await userRepository.findOneBy({ id });
    }

    async create(user: User): Promise<User> {
        const userRepository = AppDataSource.getRepository(User);
        return await userRepository.save(user);
    }

    async update(id: number, user: Partial<User>): Promise<User | null> {
        const userRepository = AppDataSource.getRepository(User);
        const result = await userRepository.update(id, user);
        if (result.affected === 0) return null;
        return await userRepository.findOneBy({ id });
    }

    async delete(user: User): Promise<User | null> {
        const userRepository = AppDataSource.getRepository(User);
        return await userRepository.remove(user);
    }
}
