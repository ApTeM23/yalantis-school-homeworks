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
    id: number;

    @Column()
    date_creation: Date;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne(() => User, {
        cascade: true
    })
    user: User;
}