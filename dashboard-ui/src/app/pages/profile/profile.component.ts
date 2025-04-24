import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // Variables to manage the state of dark mode and currency dropdown visibility
  currencyDropdownVisible: boolean = false;
  isDarkMode: boolean = false;

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

  // Toggle visibility of the currency dropdown
  toggleCurrencyDropdown(): void {
    this.currencyDropdownVisible = !this.currencyDropdownVisible;
  }

  // Logic for editing profile name
  editProfileName(): void {
    console.log('Editing profile name...');
    // You can add your logic here for editing the profile name, e.g., open a modal or form
  }

  // Logic for editing password
  editPassword(): void {
    console.log('Editing password...');
    // Add logic here to edit the password
  }

  // Logic for editing wallet
  editWallet(): void {
    console.log('Editing wallet...');
    // Add logic here to edit the wallet information
  }
}
