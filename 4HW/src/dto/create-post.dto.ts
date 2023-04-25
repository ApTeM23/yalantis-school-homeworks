import { IsString, Length, IsNumber, IsDate } from "class-validator";

export class CreatePostDto {
  @IsNumber()
  id = 0;

  @IsDate()
  date_creation: Date = new Date();

  @IsString()
  @Length(5, 255)
  title = "";

  @IsString()
  @Length(5, 255)
  text = "";

  @IsNumber()
  user = 0;
}