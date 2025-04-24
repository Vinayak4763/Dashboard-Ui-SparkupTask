import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importing Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';  // Variable for username input
  password: string = '';  // Variable for password input

  constructor(private router: Router) {}

  // Method to handle the login functionality
  onLogin() {
    // Mock validation: Here you can replace this with actual API call if you have a backend
    if (this.username === 'testuser' && this.password === 'testpassword') {
      // Simulating successful login by setting a mock token
      const token = 'mocked-token-12345';
      localStorage.setItem('token', token);  // Storing the mock token in localStorage

      // Redirecting to the dashboard after successful login
      this.router.navigate(['/dashboard']);
    } else {
      // If the login fails (invalid credentials)
      alert('Invalid username or password!');
    }
  }
}
