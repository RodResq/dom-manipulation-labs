import { ParentModule } from './parent/parent.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighLightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
