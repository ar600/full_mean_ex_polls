import { Component, OnInit } from '@angular/core';
import {Poll} from '../poll';
import {ApiService} from '../api.service';
import { Routes, RouterModule , ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {
  // newpoll = new Poll();
  poll = new Poll();
  constructor(private _apiService: ApiService, private _route: ActivatedRoute , private router: Router) {

  }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
    console.log("this is the param values",param);
    this.poll = param.question;
    // this.getPoll(poll);
    // this.poll = this.products[this.product_id];
    });

    // this._apiService.getPoll(this.poll).subscribe();
  //   this.getPoll(poll);
  // }

}
}
