import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { Posts } from './post/entities/post.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { UserRoles } from './roles/entities/user-roles.entity';
import { Role } from './roles/entities/role.entity';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads', // Optional: Sets the route prefix, default is '/'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST || 'localhost',
      port: parseInt(process.env.PGPORT, 10) || 5432,
      username: process.env.POSTGRES_DB || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'miramax92',
      database: process.env.POSTGRES_USER || 'playground',
      entities: [Posts, User, Role, UserRoles],
      synchronize: process.env.NODE_ENV !== 'production', // Disable synchronize in production
      retryAttempts: 10, // Increase retry attempts
      retryDelay: 3000, // Increase retry delay (in ms)
    }),
    PostModule,
    UsersModule,
    AuthModule,
    RolesModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log(
      'Database Host:+++++++++++++++++++++++++++++++++++++++++++++++++++++',
      process.env.DATABASE_HOST,
    );
  }
}
