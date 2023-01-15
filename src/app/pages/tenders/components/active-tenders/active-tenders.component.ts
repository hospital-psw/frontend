import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodType } from '../../enum/BloodType';
import { Tender } from '../../interface/Tender';
import { TenderService } from '../../service/tender.service';

const DATA: Tender[] = [
  {id: 1, dueDate: new Date(), items: [
    {bloodType: BloodType.AB_NEGATIVE, quantity: 5, money: {amount: 0, currency: 0}},
    {bloodType: BloodType.AB_POSITIVE, quantity: 10, money: {amount: 0, currency: 0}},
  ]},
  {id: 2, dueDate: new Date(), items: [
    {bloodType: BloodType.O_POSITIVE, quantity: 5, money: {amount: 0, currency: 0}},
    {bloodType: BloodType.O_NEGATIVE, quantity: 10, money: {amount: 0, currency: 0}},
  ]},
  {id: 3, dueDate: new Date(), items: [
    {bloodType: BloodType.B_POSITIVE, quantity: 5, money: {amount: 0, currency: 0}},
    {bloodType: BloodType.B_NEGATIVE, quantity: 10, money: {amount: 0, currency: 0}},
  ]},
]

@Component({
  selector: 'app-active-tenders',
  templateUrl: './active-tenders.component.html',
  styleUrls: ['./active-tenders.component.scss']
})
export class ActiveTendersComponent implements OnInit {
  displayedColumns: string[] = ['bloodType', 'quantity'];
  tenders: Tender[];
  public bloodType = BloodType;
  constructor(private router: Router, private tenderService: TenderService) { }

  ngOnInit(): void {
    this.tenderService.getActiveTenders().subscribe(
      (res) => {
        this.tenders = res;
      }
    )
  }

  makeAnOffer(id: number) {
    this.router.navigate(['/app/tender/', id])
  }

}
