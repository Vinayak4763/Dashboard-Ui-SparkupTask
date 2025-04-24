import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']  // Make sure this points to your CSS file
})
export class DashboardComponent implements OnInit {
  // Sample data for assets and recent activities
  assets = [
    { name: 'BTC', quantity: 0.42 },
    { name: 'TRXTEST', quantity: 21.00 },
    { name: 'DOGTEST', quantity: 50.00 },
    { name: 'USDT', quantity: 123.45 },
    { name: 'ETH', quantity: 2.1 }
  ];

  recentActivities = [
    { activity: 'Sent 0.05 BTC to wallet', time: '1 hour ago' },
    { activity: 'Received 0.1 TRXTEST', time: '3 hours ago' },
    { activity: 'Withdrew 10.0 DOGTEST', time: '5 hours ago' },
    { activity: 'Deposited 20 USDT', time: '8 hours ago' }
  ];

  profile = {
    name: 'John Doe',
    walletBalance: '5,000.00',
    qrCodeUrl: 'https://example.com/qr-code.png'  // Replace with actual QR code URL
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize any necessary logic when the component loads
    // You can also fetch the profile and assets from an API if necessary
  }

  // This method can be triggered when a user clicks the 'Deposit Money' button
  depositMoney() {
    console.log('Deposit money clicked');
    // You can handle the logic for depositing money here
  }

  // This method can be triggered when a user clicks the 'Withdraw Money' button
  withdrawMoney() {
    console.log('Withdraw money clicked');
    // You can handle the logic for withdrawing money here
  }

  // This method can be used to navigate to the wallet balance page or show details
  viewWalletBalance() {
    console.log('Wallet balance clicked');
    // Handle the wallet balance action here
  }

  // This method could be used for sending money (triggered from the send button)
  sendMoney() {
    console.log('Send money clicked');
    // Handle the send money logic here
  }

  // This method could be used for receiving money (triggered from the receive button)
  receiveMoney() {
    console.log('Receive money clicked');
    // Handle the receive money logic here
  }

  // This method can be used to show customer support tickets
  viewCustomerSupport() {
    console.log('Customer support clicked');
    // Handle customer support action here
  }
}
