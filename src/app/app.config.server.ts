import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { AuthService } from '@auth0/auth0-angular';

const serverConfig: ApplicationConfig = {
  providers: [
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
