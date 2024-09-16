import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from './user-roles.entity';

Entity();
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  description: string;

  // @ManyToMany(() => User, () => UserRoles)
  // users: User[];
}
