import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.component.html',
  styleUrls: ['./pay-card.component.scss']
})
export class PayCardComponent implements OnInit {
  paymentDetails = [
    {title: 'שם בעל כרטיס', value: 'string'},
    {title: 'תעודת בעל כרטיס', value: 333333333},
    {title: 'מספר כרטיס', value: '**** **** **** 1111'},
    {title: 'תוקף', value: '11/11/2000'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
