import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowersListComponent } from './followers-list/followers-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: 'users', component: UsersListComponent
  },
  {
    path: 'followers', component: FollowersListComponent
  },
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
