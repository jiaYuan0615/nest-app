import { Column, CreateDateColumn, Entity, OneToMany, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { PermissionRole } from "./PermissionRole.entity";
import { Role } from "./role.entity";

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
  // @ManyToMany(() => Role , (role)=>role.permissions)
  // @JoinTable()
  // roles: Role[]
  @ManyToMany(() => Role)
  // 第一種客製化 可客製化 pivot 名稱與欄位名稱
  // 無法新增欄位
  @JoinTable({
    name: 'permission_role',
    joinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id'
    }
  })
  roles: Role[]
  // 第二種客製化 可客製化 pivot 名稱與欄位名稱
  // 也可以新增欄位
  // 這個時候就要新增相對應的檔案
  // <permission_role.ts>
  // @ManyToOne(() => Permission , (permission)=>permission.permission_role)
  // @ManyToOne(() => Role , (role)=>role.permission_role)
  // <permission.ts>
  // @OneToMany(() => PermissionRole, (pr) => pr.permission)
  // public permission_role: PermissionRole[]
  // <role.ts>
  // @OneToMany(() => permission_role , (pr)=>pr.role)
  // public permission_role: permission_role[]

}