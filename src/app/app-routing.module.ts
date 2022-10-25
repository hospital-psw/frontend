import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { FeedbackPageComponent } from "./pages/feedback/components/feedback-page/feedback-page.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
