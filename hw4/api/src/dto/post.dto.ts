import { UserDTO } from './user.dto';

export interface PostDTO {
  id: number;
  date_creation: Date;
  title: string;
  text: string;
  user: UserDTO;
}