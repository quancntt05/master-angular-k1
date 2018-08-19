import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  entity:any = {};

  constructor(
    private router:Router,
    private activeRouter:ActivatedRoute,
    private api:ApiService
  ) { }

  ngOnInit() {
    if(this.activeRouter.snapshot.params.id){
      this.api.get(`api/category/get?id=${this.activeRouter.snapshot.params.id}`).then(res=>{
        this.entity = res;
      }).catch();
    }
  }

  saveCategory(){
    this.api.post(`api/category/save`,this.entity).then((res:any) => {
      if(!this.activeRouter.snapshot.params.id) this.router.navigate(['main/cat-detail',res.Id])
      else this.entity = res;
    }).catch()
  }

  backHome(){
    this.router.navigate(['main/cat'])
  }

}
