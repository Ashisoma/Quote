import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit
{
  quote: Quote[] = [
    new Quote (1, 'You only live once','Drake',new  Date(2019,1,2)),
    new Quote(1, 'Watch finding Nemo', 'Onesmus Okali',new Date(2020,9,9))
  
  ];
  constructor() { }
  counted(index){}
  //counter = 0;
  increment(index) {
    this.quote[index].upvote++;
  }
  //counterD = 0;
  decrement(index) {
    this.quote[index].downvote++;
  }

  ngOnInit() {
  }

}
