//import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'The journey of life may not become easier as we grow older, but we do seem to understand it better as our perspectives evolve.', 'Drake', new Date(2019, 1, 2)),
    new Quote(1, "Your time is limited, so don't waste it living someone else 's life. Don't be trapped by dogma – which is living with the results of other people's thinking." ,'Steve Jobs',  new Date(2020, 9, 9)),
new Quote(3, 'Only know you you love her when you let her go.', 'Martin Chris', new Date(2017, 8, 17))
  
  ];
counted(index){ }
// counter = 0;
// increment(index) {
//   t
constructor() { }

toggleDetails(index){
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}


deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
      }
  }
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength + 1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}

ngOnInit() {
}

}
