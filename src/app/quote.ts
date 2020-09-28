export class Quote {

  // date: Date;
   // author: string;
  //  upvote: number;
  //  downvote: number;

  public showDetails: boolean;
  constructor(public id: number,public name: string,public author:string,public submitDate: Date){
  // this.upvote = 0;
  //  this.id = 0;
  // this.downvote = 0;
  // this.date = completeDate;
  this.author= author;
  this.showDetails= false;
  }
}