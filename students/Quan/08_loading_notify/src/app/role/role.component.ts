import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  items: any[] = [];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private notify: NotifyService) { }

  ngOnInit() {
    this.loadRole();
  }

  loadRole() {
    this.apiService.post('api/role/all', null).then((res: any[]) => {
      this.items = res
    }).catch(err => {
      console.log(err);
    });
  }

  clickSuccess(){
    this.notify.success("Test complete!!");
  }

  detailRole(item?: any) {
    if(item) this.router.navigate(["main/role-detail",item.Id]);
    else this.router.navigate(["main/role-detail",'']);
  }

  deleteRole(item:any){
    this.apiService.delete(`api/role/delete?id=${item.Id}`).then(() => this.loadRole()).catch();
  }

}
