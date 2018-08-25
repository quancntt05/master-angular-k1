import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html'
})
export class RoleDetailComponent implements OnInit {
  entity:any = {};
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) {
      this.apiService.get(`api/role/get?id=${this.activatedRoute.snapshot.params.id}`).then(res => this.entity = res);
    }
  }

  save() {
    this.apiService.post('api/role/save', this.entity)
      .then((res: any) => {
        if (!this.activatedRoute.snapshot.params.id) this.router.navigate(['main/role-detail', res.Id]);
        else this.entity = res;
      });
  }
}
