import { IsString, Length, IsNumber, IsPositive } from "class-validator";

export class CreateUserDto {
  @IsNumber()
  id = 0;

  @IsString()
  @Length(3, 255)
  username: string = "";


  @IsString()
  @Length(5, 255)
  email: string = "";

  @IsPositive()
  @IsNumber()
  age: number = 0;

  info?: string;
  address?: { city: string; street: string };
}