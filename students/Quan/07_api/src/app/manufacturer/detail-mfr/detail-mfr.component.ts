import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-detail-mfr',
  templateUrl: './detail-mfr.component.html',
  styleUrls: ['./detail-mfr.component.css']
})
export class DetailMfrComponent implements OnInit {
  entity:any = {};

  constructor(
    private router:Router,
    private activeRouter:ActivatedRoute,
    private api:ApiService
  ) { }

  ngOnInit() {
    if(this.activeRouter.snapshot.params.id){
      this.api.get(`api/manufacturer/get?id=${this.activeRouter.snapshot.params.id}`).then(res=>{
        this.entity = res;
      }).catch();
    }
  }

  saveMfr(){
    this.api.post(`api/manufacturer/save`,this.entity).then((res:any) => {
      if(!this.activeRouter.snapshot.params.id) this.router.navigate(['main/mfr-detail',res.Id])
      else this.entity = res;
    }).catch()
  }

  backHome(){
    this.router.navigate(['main/mfr'])
  }

}
