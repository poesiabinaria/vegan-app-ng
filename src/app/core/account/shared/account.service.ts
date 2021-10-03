import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  readonly BASE_URL = `${environment.API}`;

  public currentUser = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('veganapp-user-data') || 'null')
  );

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return localStorage.getItem('veganapp-token');
  }

  getTokenExpirationDate(token: string) {
    const decodedToken: any = jwt_decode(token);

    if (decodedToken.exp == undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date: any = this.getTokenExpirationDate(token);
    return date === undefined
      ? false
      : !(date.valueOf() > new Date().valueOf());
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${this.BASE_URL}/login/`, { email, password })
      .pipe(
        map((result) => {
          console.log('result', result);

          localStorage.setItem('veganapp-token', result.access);

          this.setUserInfo();
          this.router.navigate(['/']);
        })
      );
  }

  logout() {
    localStorage.removeItem('veganapp-token');
    localStorage.removeItem('veganapp-user-data');

    this.currentUser.next(null);
    this.router.navigate(['/']);
  }

  register(user: any) {
    return this.http.post<any>(`${this.BASE_URL}/users/register/`, user).pipe(
      map((result) => {
        console.log(result);
      })
      //catchError((err) => throwError(err))
    );
  }

  getUserProfile() {
    const userId = this.getCurrentUserId();
    return this.http.get<any>(`${this.BASE_URL}/users/${userId}`);
  }

  isUserLogedIn(): boolean {
    const token = this.getToken();
    return !token || this.isTokenExpired(token) ? false : true;
  }

  setUserInfo() {
    const token: any = this.getToken();

    const decodedToken: any = jwt_decode(token);

    const currentUserData = {
      name: decodedToken.name,
      is_first_access: decodedToken.is_first_access,
      neutral_gender: decodedToken.neutral_gender,
      url_profile_image: '',
    };

    localStorage.setItem('veganapp-user-data', JSON.stringify(currentUserData));
    this.currentUser.next(currentUserData);
  }

  getCurrentUserId(): number {
    const token: any = this.getToken();
    const decodedToken: any = jwt_decode(token);

    return decodedToken.user_id;
  }

  // getUserInfo(infoRequired: string): any {
  //   const token: any = this.getToken();

  //   if (token) {
  //     const decodedToken: any = jwt_decode(token);

  //     switch (infoRequired) {
  //       case 'id':
  //         return decodedToken.user_id;

  //       case 'name':
  //         return decodedToken.name;

  //       case 'first-access':
  //         return decodedToken.is_first_access;

  //       case 'neutral-gender':
  //         return decodedToken.use_neutral_gender;
  //     }
  //     console.log(decodedToken);
  //   }
  // }
}
