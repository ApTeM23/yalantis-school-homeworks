export interface UserDTO {
    id: number;
    username: string;
    email: string;
    age: number;
    info?: string;
    address?: { city: string; street: string };
}