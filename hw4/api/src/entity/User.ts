import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
} from 'typeorm';

import { Post } from './Post';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column({ nullable: true })
    info?: string;

    @Column('json', { nullable: true })
    address?: {
        city: string;
        street: string;
    };

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]
}