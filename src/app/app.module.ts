import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CesiumDirective } from './cesium.directive';
import { NewsService } from "./rest_service/news.service";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CesiumDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NewsService, HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
