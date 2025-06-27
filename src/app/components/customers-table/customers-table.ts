import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers-table.html',
  styleUrls: ['./customers-table.scss']
})
export class CustomersTable implements OnInit {
  jsonCustomerData: any[] = [];

  ngOnInit() {
    const data = localStorage.getItem('Customer Data');
    if (data) {
      this.jsonCustomerData = JSON.parse(data);
    }
  }
}
