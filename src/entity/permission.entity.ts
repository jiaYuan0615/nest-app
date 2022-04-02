import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
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
  @ManyToMany(() => Role)
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
}