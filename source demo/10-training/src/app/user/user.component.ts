import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  items: any[] = [];
  constructor(private router: Router,
    private loadingService: LoadingService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.loadingService.start();
    this.apiService.post('api/user/all', null)
      .then((res: any[]) => {
        this.loadingService.stop();
        this.items = res;
      }).catch(err => {
        this.loadingService.stop();
      });
  }

  detail(item?: any) {
    if (item) this.router.navigate(['main/user-detail', item.Id]);
    else this.router.navigate(['main/user-detail', '']);
  }

  delete(item: any) {
    this.apiService.delete(`api/user/delete?id=${item.Id}`).then(() => this.load());
  }
}
