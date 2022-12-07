/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task } from 'src/models/task.entity';
import { TaskDto } from 'src/dto/task.dto';
import * as moment from 'moment';
import { responseError } from 'src/helpers/response.helpers';

@Injectable()
export class TaskService {
  async listing() {
  try {
      const data =  await Task.createQueryBuilder('task')
        .select(['task.id', 'task.taskName', 'task.taskDesc', 'task.status', 'task.createdDate'])
        .orderBy('task.createdDate', 'ASC')
        .getMany();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async detailListing(id: string) {
    try {
      const result = await Task.createQueryBuilder('task')
      .where('task.id = :id', { id: id })
      .select(['task.id', 'task.taskName', 'task.taskDesc', 'task.status', 'task.createdDate'])
      .getOne();
      if (!result) {
        return responseError('Task not found');
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  async create(params: TaskDto) {
    try {
      const test = moment().format('YYYY-MM-DD HH:mm:ss');
      await Task.createQueryBuilder('task')
        .insert()
        .values({
          taskName: params.taskName,
          taskDesc: params.taskDesc,
          status: true,
          createdDate: test,
        })
        .execute();
      return test;
    } catch (error) {
      throw error;
    }
  }

  async mark(id: string) {
    try {
      const result = await Task.createQueryBuilder('task')
        .where('task.id = :id', { id: id })
        .update()
        .set({
          status: false,
        })
        .execute();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(params: TaskDto) {
    try {
      const result = await Task.createQueryBuilder('task')
        .where('task.id = :id', { id: params.id })
        .update()
        .set({
          taskName: params.taskName,
          taskDesc: params.taskDesc,
        })
        .execute();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      const data = await Task.createQueryBuilder('task')
        .where('task.id = :id', { id: id })
        .delete()
        .execute();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
