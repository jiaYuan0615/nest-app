import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./Role";

@Entity('permissions')
export class Permission {
  @PrimaryColumn('uuid')
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
  @ManyToMany(() => Role)
  @JoinTable({ name: 'role_permission' })
  roles: Role[]
}