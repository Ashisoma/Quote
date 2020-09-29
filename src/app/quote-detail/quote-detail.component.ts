import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  likes: number =0;
  dislikes: number =0;
  @Output() isComplete = new EventEmitter<boolean>();
  
  completeQuote(complete: boolean){
      this.isComplete.emit(complete);
    
  }
  quoteDelete(complete:boolean){
   this.isComplete.emit(complete)
  }
  
  //counted(click){}
  
  increment(clik) {
    if (clik){ this.likes++;}
    return this.likes
  }

  decrement(clik) {
    if (clik){ this.dislikes++;}
    return this.dislikes
  }

  constructor() { }

  ngOnInit() {
  }

}
