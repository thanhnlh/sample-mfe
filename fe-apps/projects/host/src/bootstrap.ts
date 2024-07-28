import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import the MSW worker
import { worker } from './mock';

worker.start().then(() => {
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
});
