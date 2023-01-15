import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BloodType } from '../../enum/BloodType';
import { Tender } from '../../interface/Tender';
import { TenderService } from '../../service/tender.service';

@Component({
  selector: 'app-tender-details',
  templateUrl: './tender-details.component.html',
  styleUrls: ['./tender-details.component.scss']
})
export class TenderDetailsComponent implements OnInit {
  tender: Tender;
  form: FormGroup;
  tenderId: number;
  constructor(private fb: FormBuilder, private tenderService: TenderService, private route: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.loadTender();
    this.createForm();
  }

  private fillFormArray() {
    this.tender.items.forEach(item => {
      this.addBloodType(item.bloodType, item.quantity, 0);
    })
  }
  private createForm() {
    this.form = this.fb.group({
      items: this.fb.array([])
    });
  }

  private loadTender() {
    this.route.params
      .subscribe(params => {
        this.tenderService.getTender(params['id']).subscribe(
          (res) => {
           this.tender = res;
           this.tenderId = params['id'];
           this.fillFormArray();
          }
        );
      }
    );
  }
  get bloodTypeForms() {
    return this.form.get('items') as FormArray;
  }

  addBloodType(type: BloodType, quantity: number, currency: number) {
    const bloodType = this.fb.group({
      bloodType: [type, [Validators.required]],
      quantity: [quantity, [Validators.required, Validators.min(1), Validators.max(1000)]],
      money: this.fb.group({
        amount: [1, [Validators.required, Validators.min(1), Validators.max(1000)]]
      })
    })
    this.bloodTypeForms.push(bloodType);
  }


  sendTenderOffer() {
    if(this.form.valid) {
      this.tenderService.makeAnOffer(this.form.value, this.tenderId).subscribe(
        (res) => {
          this.toastrService.success("You've successfully made an offer! We'll get back to you by emai!")
          this.router.navigate(['/app/tenders']);
        }
      )
    }
  }

}
