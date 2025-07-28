import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

// @NOTE: With this approach, the TaskService is provided in the root injector,
// so it's available to all components in the application.
// This Service will be created initially whether it's used or not.

export const TasksServiceToken = new InjectionToken<TaskService>(
  'task-service-token'
);

bootstrapApplication(AppComponent, {
  providers: [{ provide: TasksServiceToken, useClass: TaskService }],
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
