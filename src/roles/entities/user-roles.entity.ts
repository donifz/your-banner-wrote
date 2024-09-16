import { User } from 'src/users/entities/user.entity';
import { Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => User, (user) => user.id)
  // userId: User;

  // @ManyToOne(() => Role, (role) => role.id)
  // roleId: Role;
}
