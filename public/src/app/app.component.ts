import { Component, OnInit } from '@angular/core';
import {Poll} from './poll'
import {ApiService} from './api.service'
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  polls : Poll[] = [
    // new Poll("1","Ali is here","1","2","3","4",4),
    // new Poll("2","David is here","1","2","3","4",6),
    // new Note("3","Mike is here")
  ];
  // poll = new Poll();
    constructor(private _apiService: ApiService, private router: Router) { }

    create(poll : Poll){
      this._apiService.create(poll).subscribe(status => this.getPolls());
      // this.notes.push(note);
    }
    //
    destroy(poll : Poll){
      this._apiService.destroy(poll).subscribe(status => this.getPolls());
      // const idx = this.notes.indexOf(note);
      // this.notes.splice(idx,1);
    }
    //
    getPoll(poll : Poll){
      // this._apiService.getPoll(poll).subscribe(status => this.getPolls());
      this.router.navigateByUrl('/polls/'+poll._id, poll);
      // const idx = this.notes.indexOf(note.original);
      // this.notes[idx] = note.edited;

    }
    //
    getPolls(){
      this._apiService.getPolls().subscribe(polls => this.polls=polls);
    }
    //
    ngOnInit() {
      this.getPolls();
    }
  }
