import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Role } from './entities/role.entity';
import { UserRoles } from './entities/user-roles.entity';

@Module({
  controllers: [RolesController],
  imports: [TypeOrmModule.forFeature([User, Role, UserRoles])],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
