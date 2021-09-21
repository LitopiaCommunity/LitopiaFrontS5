import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { MembersComponent } from './members/members.component';
import { HelpUsComponent } from './help-us/help-us.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'joinUs', component:JoinUsComponent},
  {path:'members', component:JoinUsComponent},
  {path:'helpUs', component:JoinUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
