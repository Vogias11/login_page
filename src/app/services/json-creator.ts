import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonCreator {

  // Public method to be called from button
  createJson(email: string, password: string) {
  const jsonData = [{ email, password }];


  // Save
  localStorage.setItem('myData', JSON.stringify(jsonData));
  }

  
  createCustomerJson(id: number,firstName: string, lastName: string, tel: number, birthDate: Date,
    fatherName: string, motherName: string, clasS: number){
      const customerData = [{id,firstName,lastName,tel,birthDate,fatherName,motherName,clasS}]

      localStorage.setItem('Customer Data',JSON.stringify(customerData));
    
  }
  //downlod JSON
//   const jsonContent = JSON.stringify(jsonData, null, 2);
//   const blob = new Blob([jsonContent], { type: 'application/json' });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement('a');
//   link.href = url;
//   link.download = 'data.json';
//   link.click();
//   URL.revokeObjectURL(url);
// }


//   private creatorJson(data: any): string {
//     return JSON.stringify(data, null, 2);
//   }

//   private saveJsonFile(jsonContent: string, fileName: string) {
//     const blob = new Blob([jsonContent], { type: 'application/json' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = fileName;
//     link.click();
//     window.URL.revokeObjectURL(url);
   
}
