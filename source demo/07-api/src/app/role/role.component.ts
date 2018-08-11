import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  items: any[] = [];
  constructor(private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.post('api/role/all', null).then((res: any[]) => this.items = res);
  }

  detail(item?: any) {
    if (item) this.router.navigate(['main/role-detail', item.Id]);
    else this.router.navigate(['main/role-detail', '']);
  }
}
