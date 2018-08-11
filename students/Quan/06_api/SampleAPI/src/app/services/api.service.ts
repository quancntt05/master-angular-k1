import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host: string = 'https://superdev-qlbh.azurewebsites.net/';
  currentUser: any;
  constructor(private http: Http) {
    this.loadUser();
   }

  post(url: string, data: any){
    let headers = new Headers();
    headers.append('token',this.currentUser.token || '');
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.host + url,data,{headers:headers}).toPromise().then(res => {
        resolve(res.json())
      }).catch(error =>{
        if(typeof(error) === 'string') reject(error)
        else if (typeof(error) === 'object' && error.json && typeof(error.json().Message) === 'string') reject(error.json().Message)
        else{
          reject("UNKNOWN_ERROR");
          console.log(error);
        }
      })
    })
    return promise;
  }

  saveUser(user){
    this.currentUser = user;
    localStorage.setItem("a38744e8-b672-49ff-b798-2268189fcc2d",JSON.stringify(this.currentUser));
  }
  
  loadUser(){
    this.currentUser = JSON.parse(localStorage.getItem("a38744e8-b672-49ff-b798-2268189fcc2d")) || {};
  }
}
