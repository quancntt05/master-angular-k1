import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './role/role.component';
import { UsersComponent } from './users/users.component';

const routes : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'main', component: MainComponent,children:[
    { path:'role',component: RoleComponent },
    { path:'users',component: UsersComponent }
  ]},
  { path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RoleComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
