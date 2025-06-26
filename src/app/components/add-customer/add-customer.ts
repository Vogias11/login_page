
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonCreator } from '../../services/json-creator';
import { RouterLink } from '@angular/router';


 type NewCustomer = {
    id: number;
    firstName: string;
    lastName: string;
    tel: number;
    birthDate: Date;
    fatherName: string;
    motherName: string;
    class: number;
}

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.scss'
})

export class AddCustomer {

  private jsonCustomer = inject(JsonCreator);

    customer: NewCustomer = {
    id: 0,
    firstName: '',
    lastName: '',
    tel: 0,
    birthDate: new Date(),
    fatherName: '',
    motherName: '',
    class: 0
  };

  saveCustomer(customer: NewCustomer) {
    console.log(customer.firstName); // works
  // Save logic
}



 onSubmit() {
  this.jsonCustomer.createCustomerJson(
    this.customer.id,
    this.customer.firstName,
    this.customer.lastName,
    this.customer.tel,
    this.customer.birthDate,
    this.customer.fatherName,
    this.customer.motherName,
    this.customer.class
  );

}
  
  


  };

