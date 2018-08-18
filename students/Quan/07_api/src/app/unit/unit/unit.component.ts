import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  items: any[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadUnit();
  }

  loadUnit() {
    this.apiService.post('api/unit/all', null).then((res: any[]) => {
      this.items = res
    }).catch(err => {
      console.log(err);
    });
  }

  detailUnit(item?: any) {
    if (item) this.router.navigate(["main/unit-detail", item.Id]);
    else this.router.navigate(["main/unit-detail", '']);
  }

  deleteUnit(item: any) {
    this.apiService.delete(`api/unit/delete?id=${item.Id}`).then(() => this.loadUnit()).catch();
  }
}
