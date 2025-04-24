import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeItem: string = 'Dashboard';

  sidebarItems = [
    { label: 'Dashboard', icon: 'fa-solid fa-gauge', route: '/dashboard' },
    { label: 'Wallets', icon: 'fa-solid fa-wallet', route: '/wallets' },
    { label: 'ACTIVITIES', isHeading: true },
    { label: 'Transactions', icon: 'fa-solid fa-arrows-rotate', route: '/transactions' },
    { label: 'Deposit Money', icon: 'fa-solid fa-arrow-down', route: '/deposit' },
    { label: 'Send Money', icon: 'fa-solid fa-paper-plane', route: '/send' },
    { label: 'Request Money', icon: 'fa-solid fa-hand-holding-dollar', route: '/request' },
    { label: 'Exchange Money', icon: 'fa-solid fa-exchange-alt', route: '/exchange' },
    { label: 'Withdrawals', icon: 'fa-solid fa-arrow-up', route: '/withdraw' },
    { label: 'Crypto Exchange', isHeading: true },
    { label: 'Investments', icon: 'fa-solid fa-chart-line', route: '/investments' },
    { label: 'OTHERS', isHeading: true },
    { label: 'Disputes', icon: 'fa-solid fa-bug', route: '/disputes' },
    { label: 'Tickets', icon: 'fa-solid fa-ticket', route: '/tickets' },
    { label: 'Profile Verifications', icon: 'fa-solid fa-id-badge', route: '/profile' }
  ];

  constructor(private router: Router) {}

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  setActive(item: string, route: string = ''): void {
    this.activeItem = item;
    if (route) {
      this.router.navigate([route]);
    }
  }
}