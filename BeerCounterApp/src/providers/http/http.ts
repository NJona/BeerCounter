import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpProvider {
  headers: Headers;
  public url = 'http://192.168.0.112:3000';

  constructor(public http: Http) {
    this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  }
  
  authenticateUser(name, password) {
    let body = 'name=' + name + '&password=' + password;
    let options = new RequestOptions({headers: this.headers});
    let url = this.url + '/authenticate/';
    return new Promise(resolve => {
      this.http.post(url, body ,options)
      .map(res => res.json())
      .subscribe(data => {
          localStorage.setItem("token", data.token);            //zu sessionStorage ändern
        resolve(data);
      });
    });
  }

  loadUsers() {
    if(!this.headers.has('x-access-token'))
      this.headers.append('x-access-token', localStorage.getItem("token"));
    let options = new RequestOptions({headers: this.headers});
    let url = this.url + '/users';
    return new Promise(resolve => {
      this.http.get(url, options)
      .map(res => res.json())
      .subscribe(users => {
        resolve(users);
      });
    });
  }

  createUser(name: string, password: string, admin: string) {
    let options = new RequestOptions({headers: this.headers});
    let body = 'name=' + name + '&password=' + password + '&counter=0' + '&admin=' + admin;
    let url = this.url + '/users/';
    return new Promise(resolve => {
      this.http.post(url, body,options)
      .map(res => res.json())
      .subscribe(user => {
        resolve(user);
      });
    });
  }
  
  checkIfUserExist(name) {
    if(!this.headers.has('x-access-token'))
      this.headers.append('x-access-token', localStorage.getItem("token"));
    let options = new RequestOptions({headers: this.headers});
    let body = 'name=' + name;
    let url = this.url + '/checkuser/';
    return new Promise(resolve => {
      this.http.post(url, body ,options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      });
    });
  } 

  updateUser(userID :string, password: string, counter: string){
    if(!this.headers.has('x-access-token'))
      this.headers.append('x-access-token', localStorage.getItem("token"));
    let options = new RequestOptions({headers: this.headers});
    let body = 'password=' + password + '&counter=' + counter;
    let url = this.url + '/users/' + userID;
    return new Promise(resolve => {
      this.http.put(url, body ,options)
      .map(res => res.json())
      .subscribe(user => {
        resolve(user);
      });
    });
  }

  deleteUser(userID :string){
    if(!this.headers.has('x-access-token'))
      this.headers.append('x-access-token', localStorage.getItem("token"));
    let options = new RequestOptions({headers: this.headers});
    let url = this.url + '/users/' + userID;
    return new Promise(resolve => {
      this.http.delete(url, options)
      .map(res => res.json())
      .subscribe(message => {
        resolve(message);
      });
    });
  }

  loadAvailable() {
    if(!this.headers.has('x-access-token'))
      this.headers.append('x-access-token', localStorage.getItem("token"));
    let options = new RequestOptions({headers: this.headers});
    let url = this.url + '/available';
    return new Promise(resolve => {
      this.http.get(url, options)
      .map(res => res.json())
      .subscribe(available => {
        resolve(available);
      });
    });
  }

updateAvailable(availableID: string, available: string){
  if(!this.headers.has('x-access-token'))
    this.headers.append('x-access-token', localStorage.getItem("token"));
  let options = new RequestOptions({headers: this.headers});
  let body = 'available=' + available;
  let url = this.url + '/available/' + availableID;
  return new Promise(resolve => {
    this.http.put(url, body ,options)
    .map(res => res.json())
    .subscribe(available => {
      resolve(available);
    });
  });
}

}
