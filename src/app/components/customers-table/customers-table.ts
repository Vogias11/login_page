import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customers-table',
  imports: [CommonModule],
  templateUrl: './customers-table.html',
  styleUrl: './customers-table.scss'
})
export class CustomersTable {

  jsonCustomerData: any = [];

ngOnInit() {
  const data = localStorage.getItem('Customer Data');
  if (data) {
    this.jsonCustomerData = JSON.parse(data);
  }
}

}
