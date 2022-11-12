import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Patient } from '../../../interface/patient';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  allergies: any[] = [];
  bloodType: any[] = [];
  doctors: any[]=[];
  gender: any[]=[];
  constructor() { }
  

  ngOnInit() {
    this.allergies = [
      { item_id: 1, item_text: 'Wheat' },
      { item_id: 2, item_text: 'Sulphur Dioxide' },
      { item_id: 3, item_text: 'Celery' },
      { item_id: 4, item_text: 'Crustacean' },
      { item_id: 5, item_text: 'Egg' },
      { item_id: 6, item_text: 'Fish' },
      { item_id: 7, item_text: 'Lupin' },
      { item_id: 8, item_text: 'Milk' },
      { item_id: 9, item_text: 'Mustard' }
    ];
    
    this.bloodType = [
      {value: 'A'},
      {value:  'B'},
      {value: 'AB'},
      {value: '0'},
    ];
    this.gender = [
      {value: ' Male'},
      {value:  'Female'},
      {value: 'Other'},
      
    ];
    this.doctors = [
      {value: 'Petar Petrovic'},
      {value:  'Marko Markovic'}
     
    ];
    
  }
  onSubmit(feedback: Patient){}
}
