import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('profile')
export class Profile {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20 })
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    /**
     * Relations
     */
    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}
