import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard-ui';
  isDarkMode: boolean = false; // Declare the isDarkMode property

  ngOnInit(): void {
    // Check if dark mode preference exists in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      this.isDarkMode = JSON.parse(savedDarkMode);
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
      }
    }
  }

  // Toggle dark mode and save preference to localStorage
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
  }
}
