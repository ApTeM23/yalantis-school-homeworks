import { UserCreateDto } from '../dto/user-create.dto';
import { User } from '../entities/user.entity';

export class UserService {
	users: User[] = [];
    nextUserId = 1;
	
	constructor(

	) {}

	async findUserById(id: number): Promise<User | null> {
		const user = this.users.filter(u => u.id === id);
		return user.length == 1 ? user[0] : null;
	}

	async getAllUsers(): Promise<User[] | null> {
		return this.users ? this.users : null;
	}

	async createUser({ name }: UserCreateDto): Promise<void> {
		this.users.push(new User(this.nextUserId++, name));
	}

	async updateUser(id: number, name: string): Promise<void> {
		this.users[id-1] = new User(id, name);
	}
}