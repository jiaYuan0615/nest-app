import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Permission } from "./permission.entity";

@Entity('roles')
export class Role {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ length: 20 })
  name: string;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Permission)
  permissions: Permission[]

}