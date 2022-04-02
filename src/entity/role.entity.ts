import { Column, CreateDateColumn, Entity, OneToMany, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Permission } from "./permission.entity";
import { PermissionRole } from "./PermissionRole.entity";

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

  // @OneToMany(() => PermissionRole, (pr) => pr.role)
  // public permission_role: PermissionRole[]
}