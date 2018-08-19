import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  items: any[] = [];
  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.loadMfr();
  }

  loadMfr() {
    this.apiService.post('api/manufacturer/all', null).then((res: any[]) => {
      this.items = res
    }).catch(err => {
      console.log(err);
    });
  }

  detailMfr(item?: any) {
    if(item) this.router.navigate(["main/mfr-detail",item.Id]);
    else this.router.navigate(["main/mfr-detail",'']);
  }

  deleteMfr(item:any){
    this.apiService.delete(`api/manufacturer/delete?id=${item.Id}`).then(() => this.loadMfr()).catch();
  }

}
