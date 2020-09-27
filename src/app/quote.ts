export class Quote {
  
  date: Date;
  author: string;
  upvote: number;
  downvote: number;

  
  constructor(public id: number,public name: string,author:string, date: Date){
  this.upvote = 0;
  this.id = 0;
  this.downvote = 0;
  this.date = date;
  this.author= author;
  }
}