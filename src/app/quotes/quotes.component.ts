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
    new Quote(1, 'Watch finding Nemo', 'Onesmus Okali',new Date(2020,9,9)),
    new Quote(3,'Only know you you love her when you let her go.','Martin Chris', new Date(2017,8,17) )
  
  ];
  counted(index){}
  //counter = 0;
  increment(index) {
    this.quote[index].upvote++;
  }
  //counterD = 0;
  decrement(index) {
    this.quote[index].downvote++;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  constructor() { }

  toggleDetails(index){
    this.quote[index].showDetails = !this.quote[index].showDetails;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  addNewQuote(quote){
   let goalLength = this.quote.length;
   quote.id = goalLength +1;
   quote.completeDate = new Date(quote.completeDate)
   this.quote.push(quote)

  }

  ngOnInit() {
  }

}
