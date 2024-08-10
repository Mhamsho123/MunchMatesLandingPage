import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { PopularComponent } from './components/flights/popular/popular.component';

const routes: Routes = [

  {path: 'popular',   component: PopularComponent},
  {path: ':language?',      component: HomeComponent},
  {path: ':language?/proyectos',   component: ArchiveComponent},

  {path: 'profile'        ,   component: PopularComponent       },
  // {path: 'users'          ,   component: UsersComponent           , canActivate: [AuthGuard]},
  // {path: 'register-user'  ,   component: RegisterUserComponent    , canActivate: [AuthGuard]},

  {path: '**', pathMatch: 'full', redirectTo: '/'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
