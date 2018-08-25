import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items: any[] = [];
  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.apiService.post('api/product/all', null).then((res: any[]) => {
      this.items = res
    }).catch(err => {
      console.log(err);
    });
  }

  detailProduct(item?: any) {
    if(item) this.router.navigate(["main/product-detail",item.Id]);
    else this.router.navigate(["main/product-detail",'']);
  }

  deleteProduct(item:any){
    this.apiService.delete(`api/product/delete?id=${item.Id}`).then(() => this.loadProduct()).catch();
  }

}
