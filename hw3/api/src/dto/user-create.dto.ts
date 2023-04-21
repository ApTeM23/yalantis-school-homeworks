import { IsString } from 'class-validator';

export class UserCreateDto {
	@IsString({ message: 'Не указано имя' })
	name: string;
}
