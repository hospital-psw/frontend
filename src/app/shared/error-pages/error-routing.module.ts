import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenPageComponent } from './components/forbidden-page/forbidden-page.component';

const routes: Routes = [
  { path: 'forbidden', component: ForbiddenPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ErorrRoutingModule { }