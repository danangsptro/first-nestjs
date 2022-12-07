import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { TaskController } from './controllers/taskContorllers';
import { TaskService } from './services/task.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
