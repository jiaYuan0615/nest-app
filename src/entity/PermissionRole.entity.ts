import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity';
import { Permission } from './permission.entity';

@Entity('permission_role')
export class PermissionRole {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  roleId: string;

  @Column()
  permissionId: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // pivot 有客製化需求則要加入下面兩行
  @ManyToOne(() => Permission, (permission) => permission.permission_role)
  public permission!: Permission;

  @ManyToOne(() => Role, (role) => role.permission_role)
  public role!: Role;
}
