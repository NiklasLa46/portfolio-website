import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  { path: 'privacy', component: PrivacyComponent },
  { path: 'imprint', component: ImprintComponent},
  { path: '', component: MainContentComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',  
    anchorScrolling: 'enabled',  
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }