import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, UserLogin } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;
  url: string = environment.API_URL;
  constructor(private http: HttpClient, private router: Router) { }

  login(userLogin: UserLogin): void {
    let { email, password } = userLogin;

    this.http.get(`${this.url}/users?email=${email}&password=${password}`).subscribe((resp: any) => {
      if(resp.length > 0) {
        this.user = resp[0];
        this.router.navigate(['/buscar']);
      }
    })
  }

  register(user: User): void {
    this.http.post(`${this.url}/users`, user).subscribe(resp => {
      this.router.navigate(['/login'])
    })
  }
}
