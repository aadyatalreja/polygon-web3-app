import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Provides critical services for rendering the app in a browser.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Enables animations in the app.
import { FormsModule } from '@angular/forms'; // Supports two-way data binding in forms.
import { MatInputModule } from '@angular/material/input'; // Material input component for forms.
import { MatButtonModule } from '@angular/material/button'; // Material button component.
import { MatFormFieldModule } from '@angular/material/form-field'; // Provides a container for input fields.

@NgModule({
  imports: [
    BrowserModule, // Essential module for running an Angular app in the browser.
    BrowserAnimationsModule, // Enables animations (required by Angular Material components).
    FormsModule, // Supports form controls and two-way binding with [(ngModel)].
    MatInputModule, // Material input module for enhanced form input UI.
    MatButtonModule, // Material button module for styled buttons.
    MatFormFieldModule, // Material form field for grouping inputs with labels and styling.
  ],
  providers: [], // Declare app-wide services here if needed.
  bootstrap: [] // Not used here since the app uses `bootstrapApplication` in `main.ts`.
})
export class AppModule {}