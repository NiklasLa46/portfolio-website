import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './../app/about-me/about-me.component';
import { MySkillsComponent } from './../app/my-skills/my-skills.component';
import { ProjectsComponent } from './../app/projects/projects.component';


export const routes: Routes = [
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: MySkillsComponent },
  { path: 'portfolio', component: ProjectsComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }