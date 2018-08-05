import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  }
  login() {
    this.api.post("https://superdev-qlbh.azurewebsites.net/api/user/login", {
      "username": this.username,
      "password": this.password
    }).then(res => {
      if (res.json().token) {
        this.router.navigate(['/main/role']);
      }
    }).catch(error => {
      alert(error.json().Message)
    })

  }
}
