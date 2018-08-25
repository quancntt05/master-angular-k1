import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  entity:any = {};
  categories: any = [];
  units: any = [];
  manufacturers: any = [];

  constructor(
    private router:Router,
    private activeRouter:ActivatedRoute,
    private api:ApiService
  ) { }

  ngOnInit() {
    this.api.post('api/category/all', null).then((res: any[]) => {
      this.categories = res
    }).catch(err => {
      console.log(err);
    });
    this.api.post('api/unit/all', null).then((res: any[]) => {
      this.units = res
    }).catch(err => {
      console.log(err);
    });
    this.api.post('api/manufacturer/all', null).then((res: any[]) => {
      this.manufacturers = res
    }).catch(err => {
      console.log(err);
    });
    if(this.activeRouter.snapshot.params.id){
      this.api.get(`api/product/get?id=${this.activeRouter.snapshot.params.id}`).then(res=>{
        this.entity = res;
      }).catch();
    }
  }

  saveProduct(){
    this.api.post(`api/product/save`,this.entity).then((res:any) => {
      if(!this.activeRouter.snapshot.params.id) this.router.navigate(['main/product-detail',res.Id])
      else this.entity = res;
    }).catch()
  }

  backHome(){
    this.router.navigate(['main/product'])
  }
}
