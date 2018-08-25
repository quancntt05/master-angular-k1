import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  entity:any = {};
  roles: any[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.post('api/role/all', null).then((res: any) => {
      this.roles = res;
    });
    if (this.activatedRoute.snapshot.params.id) {
      this.apiService.get(`api/user/get?id=${this.activatedRoute.snapshot.params.id}`)
        .then(res => this.entity = res);
    }
  }

  save() {
    this.apiService.post('api/user/save', this.entity)
      .then((res: any) => {
        if (!this.activatedRoute.snapshot.params.id) this.router.navigate(['main/user-detail', res.Id]);
        else this.entity = res;
      });
  }
}
