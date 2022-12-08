import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BloodType } from '../../enum/BloodType';
import { Tender } from '../../interface/Tender';

@Component({
  selector: 'app-tender-details',
  templateUrl: './tender-details.component.html',
  styleUrls: ['./tender-details.component.scss']
})
export class TenderDetailsComponent implements OnInit {
  tender: Tender = {id: 3, dueDate: new Date(), items: [
    {bloodType: BloodType.B_PLUS, quantity: 5, price: 0},
    {bloodType: BloodType.B_MINUS, quantity: 10, price: 0},
  ]};

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      bloodTypes: this.fb.array([])
    })
  }

  get bloodTypeForms() {
    return this.form.get('bloodTypes') as FormArray;
  }

  addBloodType() {
    const bloodType = this.fb.group({
      bloodType: [null, [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1), Validators.max(1000)]],
      price: [1, [Validators.required, Validators.min(1), Validators.max(1000)]],
    })

    this.bloodTypeForms.push(bloodType);
  }

  deleteBloodType(i: number) {
    this.bloodTypeForms.removeAt(i);
  }

  canAddBloodType(): boolean {
    return this.bloodTypeForms.length <= 8;
  }
  
  sendTenderOffer() {

  }

}
