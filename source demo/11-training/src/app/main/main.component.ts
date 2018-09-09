import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Dashboard';
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('role')) this.title = 'Role';
      }
    });
  }

  ngOnInit() {
    if (!this.apiService.currentUser.token) {
      this.router.navigate(['login']);
    }
  }
  ngAfterViewInit() {
    $.getScript("assets/pike-admin/js/pikeadmin.js");
  }
}
