import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
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
  constructor(private router: Router,
    private notifyService: NotifyService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.apiService.post('api/role/all', null).then((res: any[]) => this.items = res);
  }

  success(){
    this.notifyService.success('TEST');
  }

  detail(item?: any) {
    if (item) this.router.navigate(['main/role-detail', item.Id]);
    else this.router.navigate(['main/role-detail', '']);
  }

  delete(item: any) {
    this.apiService.delete(`api/role/delete?id=${item.Id}`).then(() => this.load());
  }
}
