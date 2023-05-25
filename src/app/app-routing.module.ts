import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeBodyComponent } from './homeBody/home-body.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeBodyComponent,
  },
  {
    path : '', redirectTo : 'about', pathMatch : 'full'
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
