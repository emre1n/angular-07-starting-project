import { inject, Injectable, signal } from '@angular/core';

import { LoggingService } from '../logging.service';
import type { Task, TaskStatus } from './task.model';

// @NOTE: This is the recommended approach for providing services in Angular.
// More performant than providing in the root injector.
// One instance of the service will be created for the entire application.
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };

    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log(`New task added: ${newTask.title}`);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.loggingService.log(`Task status updated: ${taskId} to ${newStatus}`);
  }
}
