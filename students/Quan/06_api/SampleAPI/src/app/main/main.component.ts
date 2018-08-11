import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
    if(!this.api.currentUser.token){
      this.router.navigate(['login'])
    }
  }
  ngAfterViewInit(){
    $.getScript("assets/pike-admin/js/pikeadmin.js");
  }
}
