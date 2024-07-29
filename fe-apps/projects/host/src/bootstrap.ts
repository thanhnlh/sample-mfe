import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import the MSW worker
import { worker } from './mock';
import { NgZone } from '@angular/core';

worker.start().then(() => {
bootstrapApplication(AppComponent, appConfig)
  .then((ref) => {
    const ngZone = ref.injector.get(NgZone, null);
    if (!ngZone) {
      console.warn('No NgZone to share found');
      return;
    }
  })
  .catch((err) => console.error(err));
});