import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './main/role/role.component';
import { UserComponent } from './main/user/user.component';
import { TestComponent } from './main/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children:
      [
        { path: 'role', component: RoleComponent },
        { path: 'user', component: UserComponent },
        { path: 'test', component: TestComponent },
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
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
