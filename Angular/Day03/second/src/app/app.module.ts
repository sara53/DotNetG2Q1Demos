import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/OneWayBinding&TwoWayBinding/slider.component';
import { LoginComponent } from './components/TwoWayBinding/login.component';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './components/Directives/content.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [AppComponent, SliderComponent, LoginComponent, ContentComponent, TodosComponent],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
