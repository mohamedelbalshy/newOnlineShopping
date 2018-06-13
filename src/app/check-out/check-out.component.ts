import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {


  creditCardNumber:number;
  cardCVV:string;
  country:string;
  email:string;
  city:string;
  state:string;
  phoneNumber:number;
  postalCode:string;
  address:string;
  lastName:string;
  firstName:string;
  



  constructor() { }

  ngOnInit() {
  }
  order(){
    console.log(this.creditCardNumber, this.cardCVV,this.country);
  }


}
