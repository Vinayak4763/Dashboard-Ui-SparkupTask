import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    const token = localStorage.getItem('token');  // Check if token is stored

    if (token) {
      return true;  // Allow navigation if token exists
    } else {
      this.router.navigate(['/']);  // Redirect to login if no token
      return false;  // Deny access to protected route
    }
  }
}
