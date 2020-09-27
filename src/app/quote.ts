export class Quote {

  date: Date;
   author: string;
   upvote: number;
   downvote: number;

  showDetails: boolean;
  constructor(public id: number,public name: string,author:string, completeDate: Date){
   this.upvote = 0;
  //  this.id = 0;
   this.downvote = 0;
   this.date = completeDate;
  this.author= author;
  this.showDetails= false;
  }
}