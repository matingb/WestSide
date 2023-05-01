import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { MatIconModule } from '@angular/material/icon';
import { AnotarseModalComponent } from './modals/anotarse-modal/anotarse-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassDetailsComponent,
    AnotarseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
