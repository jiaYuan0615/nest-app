import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Permission } from './permission.entity';
import { PermissionRole } from './PermissionRole.entity';

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

  // 無需額外增加 pivot 欄位作法
  // @ManyToMany(() => Permission)
  // permissions: Permission[]

  // 需要額外增加 pivot 欄位作法
  @OneToMany(() => PermissionRole, (pr) => pr.role)
  public permission_role: PermissionRole[];
}
