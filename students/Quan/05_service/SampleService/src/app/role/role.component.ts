import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  items:any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.post('https://api.serverapi.host/api/v1/apiv3/GetDistricts',{
      "token": "TokenStaging"
    }).then(res => {
      this.items = res.json().data;
    }).catch(err => {
      console.log(err);
    })
  }

}
