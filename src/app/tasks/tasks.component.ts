import { Component } from '@angular/core';

// import { TaskService } from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  // providers: [TaskService],
  // @NOTE: This is the element injector method for providing services.
  // Service can be reached by the component's children as well.
  // Each instance of the service will be created when the component is created.
})
export class TasksComponent {}
