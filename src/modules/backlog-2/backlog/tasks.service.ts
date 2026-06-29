import { Injectable } from '@nestjs/common';
import { TaskResponseDto, CreateTaskDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: TaskResponseDto[] = [];

  listTasks(): TaskResponseDto[] {
    return this.tasks;
  }

  createTask(dto: CreateTaskDto): TaskResponseDto {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: dto.title,
      createdAt: new Date(),
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
