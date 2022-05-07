import 'reflect-metadata';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PermissionRole } from './PermissionRole.entity';

@Entity('permissions')
export class Permission {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ length: 20 })
  title: string;

  @Column({ length: 100 })
  action: string;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * Relations
   */
  // 基本多對多定義
  // 只需要針對其中一邊進行設定即可 稱為 uni-directional
  // 設定的那方會影響 pivot 名稱
  // 如果設定在這邊 pivot 名稱就會變成 permission_roles_role
  // 反之 role_permissions_permission
  // @ManyToMany(() => Role)
  // @JoinTable()
  // roles: Role[]

  // 也可以兩邊都設定 稱為 bi-directional
  // 則要改為
  // @ManyToMany(() => Role, (role) => role.permissions)
  // @JoinTable()
  // roles: Role[]

  // 無需額外增加 pivot 欄位作法
  // @ManyToMany(() => Role)
  // roles: Role[]

  // 需要額外增加 pivot 欄位作法
  @OneToMany(() => PermissionRole, (pr) => pr.permission)
  public permission_role: PermissionRole[];
}
