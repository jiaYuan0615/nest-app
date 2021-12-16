import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Permission } from "./Permission";

@Entity('roles')
export class Role {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ length: 20 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}