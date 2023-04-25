import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    BaseEntity,
} from 'typeorm';

import { User } from './User';

@Entity('posts')
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id = 0;

    @Column()
    date_creation: Date = new Date();

    @Column()
    title: string = "";

    @Column()
    text: string = "";

    @ManyToOne(() => User, user => user.posts)
    user: number = 0;
}