import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { TaskService } from './app/tasks/tasks.service';

// @NOTE: With this approach, the TaskService is provided in the root injector,
// so it's available to all components in the application.
// This Service will be created initially whether it's used or not.
// bootstrapApplication(AppComponent, {
//   providers: [TaskService],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));
