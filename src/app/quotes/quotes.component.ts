//import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit
{
  quotes: Quote[] = [
    new Quote (1, 'The journey of life may not become easier as we grow older, but we do seem to understand it better as our perspectives evolve.','Drake',new  Date(2019,1,2)),
    new Quote(1, 'Watch finding Nemo', 'Onesmus Okali',new Date(2020,9,9)),
    new Quote(3,'Only know you you love her when you let her go.','Martin Chris', new Date(2017,8,17) )
  
  ];
  counted(index){}
  // counter = 0;
  // increment(index) {
  //   t
  constructor() { }

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
 
   }

  ngOnInit() {
  }

}
