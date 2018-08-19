import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {
  entity:any = {};
  constructor(
    private router:Router,
    private activeRouter:ActivatedRoute,
    private apiService :ApiService
  ) { }


  ngOnInit() {
    if(this.activeRouter.snapshot.params.id){
      this.apiService.get(`api/unit/get?id=${this.activeRouter.snapshot.params.id}`).then(res=>{
        this.entity = res;
      }).catch();
    }
  }

  saveUnit(){
    this.apiService.post(`api/unit/save`,this.entity).then((res:any) => {
      if(!this.activeRouter.snapshot.params.id) this.router.navigate(['main/unit-detail',res.Id])
      else this.entity = res;
    }).catch()
  }

  backHome(){
    this.router.navigate(['main/unit'])
  }
}
