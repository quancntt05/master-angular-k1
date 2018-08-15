import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  entity:any = {};

  constructor(
    private router:Router,
    private activeRouter:ActivatedRoute,
    private api:ApiService
  ) { }

  ngOnInit() {
    if(this.activeRouter.snapshot.params.id){
      this.api.get(`api/role/get?id=${this.activeRouter.snapshot.params.id}`).then(res=>{
        this.entity = res;
      }).catch();
    }
  }

  saveRole(){
    this.api.post(`api/role/save`,this.entity).then((res:any) => {
      if(!this.activeRouter.snapshot.params.id) this.router.navigate(['main/role-detail',res.Id])
      else this.entity = res;
    }).catch()
  }

  backHome(){
    this.router.navigate(['main/role'])
  }

}
