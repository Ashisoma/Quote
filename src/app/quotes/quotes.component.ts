import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  counter = 0;
  increment() {
    this.counter++;
  }
  counterD = 0;
  decrement() {
    this.counterD--;
  }
  
  ngOnInit(): void {
  }

}
