import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Poll} from '../poll'
import {ApiService} from '../api.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
// polls : Poll[]=[];
newPoll = new Poll();
// @Output() createNewPollEvent = new EventEmitter();

constructor(private _apiService: ApiService , private router: Router) { }
  create(){
    // this.polls = this.
    this._apiService.create(this.newPoll).subscribe(status => this._apiService.getPolls());
    //sending the newNote to the Parent(app.ts)
    // this.createNewPollEvent.emit(this.newPoll);
    //to reset the new info everytime user inputs
    // this.newPoll = new Poll();
    // console.log("inside.create x", this.newPoll);
    this.router.navigate(['']);

  }


  ngOnInit() {
    return this._apiService.getPolls();
  }

}
