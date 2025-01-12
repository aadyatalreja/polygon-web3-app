import { bootstrapApplication } from '@angular/platform-browser'; // Function to bootstrap a standalone Angular app.
import { AppComponent } from './app/app.component'; // Main component of the app.

bootstrapApplication(AppComponent).catch((err) => console.error(err));
// Initializes the application using the standalone `AppComponent` with `appConfig`.
// Logs any errors during startup to the console.