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
import { RoleDetailComponent } from './role/role-detail.component';
import { NotifyService } from './services/notify.service';
import { LoadingService } from './services/loading.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children:
      [
        { path: 'role', component: RoleComponent },
        { path: 'role-detail/:id', component: RoleDetailComponent },
        { path: 'user', component: UserComponent },
        { path: 'user-detail/:id', component: UserDetailComponent },
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
    RoleDetailComponent,
    UserComponent,
    UserDetailComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UtilityService, NotifyService, LoadingService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
