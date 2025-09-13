import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// Este archivo usa el frmamework de Angular para iniciar la aplicación
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
