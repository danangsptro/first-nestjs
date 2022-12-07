/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskDto } from '../dto/task.dto';
import { TaskService } from '../services/task.service';
import { response, responseError } from '../helpers/response.helpers';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('listing')
  async getTasks() {
    try {
      const result = await this.taskService.listing();
      return response('successfully mark one task', result);
    } catch (error) {
      return responseError(error.message);
    }
  }

  @Get(':id') 
  async getTasksDetail(@Param() body: { id: string }) {
    try {
      const result = await this.taskService.detailListing(body.id);
      return response('successfully mark one task', result)
    } catch (error) {
      return responseError(error.message);
    }
  }

  @Post('create')
  async createTask(@Body() body: TaskDto) {
    try {
      const result = await this.taskService.create(body);
      return response('successfully mark one task', result);
    } catch (error) {
      return responseError(error.message);
    }
  }

  @Post('mark')
  async mark(@Body() body: TaskDto) {
    try {
      const result = await this.taskService.mark(body.id);
      return response('successfully mark one task', result);
    } catch (error) {
      return responseError(error.message);
    }
  }

  @Post('update')
  async updateTask(@Body() body: TaskDto) {
    try {
      const result = await this.taskService.update(body);
      return response('successfully mark one task', result);
    } catch (error) {
      return responseError(error.message);
    }
  }

  @Post('delete')
  async deleteTask(@Body() body: { id: string }) {
    try {
      if (!body.id) {
        return responseError('id is required');
      }
      console.log(body.id);
      const result = await this.taskService.delete(body.id);
      return response('successfully mark one task', result);
    } catch (error) {
      return responseError(error.message);
    }
  }
}
