import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SerService} from './ser.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './com/home/home.component';
import { HeaderComponent } from './com/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [SerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
