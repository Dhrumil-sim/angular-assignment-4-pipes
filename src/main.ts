import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Assuming appConfig only contains other necessary configuration
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Use existing providers from appConfig
    provideRouter(routes), // Add routing to providers
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
