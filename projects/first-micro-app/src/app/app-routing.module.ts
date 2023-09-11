import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FmaFirstRouteComponent } from './fma-first-route/fma-first-route.component';
import { FmaSecondRouteComponent } from './fma-second-route/fma-second-route.component';
import { FmaThirdRouteComponent } from './fma-third-route/fma-third-route.component';

const routes: Routes = [
  {path:'fma-first-route', component: FmaFirstRouteComponent},
  {path:'fma-second-route', component: FmaSecondRouteComponent},
  {path:'fma-third-route', component: FmaThirdRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
