import { Component, Input, OnInit } from '@angular/core';
import Branch from '../../interfaces/branch';

@Component({
  selector: 'app-medical-branch-card',
  templateUrl: './medical-branch-card.component.html',
  styleUrls: ['./medical-branch-card.component.scss']
})
export class MedicalBranchCardComponent implements OnInit {
  @Input() content:Branch;
  @Input() selected:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
