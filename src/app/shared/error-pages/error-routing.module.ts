import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenPageComponent } from './components/forbidden-page/forbidden-page.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';

const routes: Routes = [
  { path: 'forbidden', component: ForbiddenPageComponent },
  { path: 'notfound', component: NotfoundPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ErorrRoutingModule { }