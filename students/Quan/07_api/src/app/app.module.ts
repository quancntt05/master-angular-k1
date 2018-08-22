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
import { UnitComponent } from './unit/unit/unit.component';
import { UnitDetailComponent } from './unit/unit/unit-detail/unit-detail/unit-detail.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { DetailMfrComponent } from './manufacturer/detail-mfr/detail-mfr.component';
import { CategoryComponent } from './category/category.component';
import { CatDetailComponent } from './category/cat-detail/cat-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children:
      [
        { path: 'role', component: RoleComponent },
        { path: 'role-detail/:id', component: RoleDetailComponent },
        { path: 'user', component: UserComponent },
        { path: 'unit', component: UnitComponent },
        { path: 'unit-detail/:id', component: UnitDetailComponent },
        { path: 'mfr', component: ManufacturerComponent },
        { path: 'mfr-detail/:id', component: DetailMfrComponent },
        { path: 'cat', component: CategoryComponent },
        { path: 'cat-detail/:id', component: CatDetailComponent },
        { path: 'product', component: ProductComponent },
        { path: 'product-detail/:id', component: ProductDetailComponent },

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
    RoleDetailComponent,
    UnitComponent,
    UnitDetailComponent,
    ManufacturerComponent,
    DetailMfrComponent,
    CategoryComponent,
    CatDetailComponent,
    ProductComponent,
    ProductDetailComponent
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
