import { Column, CreateDateColumn, Entity, ManyToOne, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./role.entity";
import { Permission } from "./permission.entity";

@Entity('permission_role')
export class PermissionRole {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  roleId: string

  @Column()
  permissionId: string

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Permission, (permission) => permission.permission_role);
  public permission!: Permission;

  @ManyToOne(() => Role, (role) => role.permission_role);
  public role!: Role;
}