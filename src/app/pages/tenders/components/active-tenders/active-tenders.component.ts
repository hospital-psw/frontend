import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodType } from '../../enum/BloodType';
import { Tender } from '../../interface/Tender';

const DATA: Tender[] = [
  {id: 1, dueDate: new Date(), items: [
    {bloodType: BloodType.AB_PLUS, quantity: 5, price: 0},
    {bloodType: BloodType.AB_MINUS, quantity: 10, price: 0},
  ]},
  {id: 2, dueDate: new Date(), items: [
    {bloodType: BloodType.O_PLUS, quantity: 5, price: 0},
    {bloodType: BloodType.O_MINUS, quantity: 10, price: 0},
  ]},
  {id: 3, dueDate: new Date(), items: [
    {bloodType: BloodType.B_PLUS, quantity: 5, price: 0},
    {bloodType: BloodType.B_MINUS, quantity: 10, price: 0},
  ]},
]

@Component({
  selector: 'app-active-tenders',
  templateUrl: './active-tenders.component.html',
  styleUrls: ['./active-tenders.component.scss']
})
export class ActiveTendersComponent implements OnInit {
  displayedColumns: string[] = ['bloodType', 'quantity'];
  tenders: Tender[] = DATA;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  makeAnOffer(id: number) {
    this.router.navigate(['/tender/', id])
  }

}
