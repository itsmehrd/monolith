import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FmaFirstRouteComponent } from './fma-first-route/fma-first-route.component';
import { FmaSecondRouteComponent } from './fma-second-route/fma-second-route.component';
import { FmaThirdRouteComponent } from './fma-third-route/fma-third-route.component';

@NgModule({
  declarations: [
    AppComponent,
    FmaFirstRouteComponent,
    FmaSecondRouteComponent,
    FmaThirdRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
