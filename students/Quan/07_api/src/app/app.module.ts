import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { UtilityService } from './services/utility.service';
import { ApiService } from './services/api.service';
import { RoleDetailComponent } from './role/role-detail/role-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children:
      [
        { path: 'role', component: RoleComponent },
        { path: 'role-detail/:id', component: RoleDetailComponent },
        { path: 'user', component: UserComponent },
      ]
  },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RoleComponent,
    UserComponent,
    RoleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UtilityService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
