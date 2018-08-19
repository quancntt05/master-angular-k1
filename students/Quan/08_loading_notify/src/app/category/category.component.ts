import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  items: any[] = [];
  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.apiService.post('api/category/all', null).then((res: any[]) => {
      this.items = res
    }).catch(err => {
      console.log(err);
    });
  }

  detailCategory(item?: any) {
    if(item) this.router.navigate(["main/cat-detail",item.Id]);
    else this.router.navigate(["main/cat-detail",'']);
  }

  deleteCategory(item:any){
    this.apiService.delete(`api/category/delete?id=${item.Id}`).then(() => this.loadCategory()).catch();
  }
}
