import { ParsedQs } from 'qs';

import { User } from "../entity/User";
import { CreateUserDto } from "../dto/create-user.dto";
import { usersRepository } from "../repositories/users.repository";

class UsersService {
  async createUser(dto: CreateUserDto): Promise<User> {
    return usersRepository.create(dto);
  }

  async countUsers(): Promise<number> {
    return usersRepository.count();
  }

  async getAll(query: ParsedQs, page: number, limit: number): Promise<User[]> {
    return usersRepository.findAll(query, page, limit);
  }

  async getOne(id: number): Promise<User | null> {
    return usersRepository.findById(id);
  }

  async deleteUser(id: number): Promise<User | null> {
    const user = await this.getOne(id);
    return user ? usersRepository.delete(user) : null;
  }

  async updateUser(id:number, dto: CreateUserDto): Promise<User | null> {
    return usersRepository.update(id, dto);
  }
}

export const usersService = new UsersService();
