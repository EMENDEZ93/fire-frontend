import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DirectivaComponent} from './directiva/directiva.component';
import {UserComponent} from './user/user.component';
import {CreateComponent} from './_user/create/create.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent },
  {path: 'users', component: UserComponent},
  {path: 'create/user', component: CreateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
