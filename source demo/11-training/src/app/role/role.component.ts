import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  items: any[] = [];
  constructor(private router: Router,
    private loadingService: LoadingService,
    private notifyService: NotifyService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.apiService.post('api/role/all', null)
      .then((res: any[]) => {
        this.loadingService.stop();
        this.items = res;
      });
  }

  detail(item?: any) {
    if (item) this.router.navigate(['main/role-detail', item.Id]);
    else this.router.navigate(['main/role-detail', '']);
  }

  delete(item: any) {
    this.notifyService.confirm('Xóa').then(()=>{
      this.apiService.delete(`api/role/delete?id=${item.Id}`).then(() =>  {
        this.notifyService.alert('Xóa thành công').then(()=>{
          this.load();
        });
      });
    });
  }
}
