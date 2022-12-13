import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-info',
  templateUrl: './selection-info.component.html',
  styleUrls: ['./selection-info.component.scss']
})
export class SelectionInfoComponent implements OnInit {
  @Input() selectedDate:Date|null;
  @Input() selectedBranch:string|null;
  @Input() selectedDoctor:string|null;
  @Input() selectedTime:Date|null;

  constructor() { }

  ngOnInit(): void {
  }

}
