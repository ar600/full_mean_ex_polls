import { Injectable } from '@angular/core';
import {Poll} from './poll';
import {Http} from '@angular/http';
import 'rxjs';



@Injectable()
export class ApiService {

  constructor( private _http: Http) {}
//   show(){
//   return this._http.get('http://www.github.com').map(data => data.json());
// }
  create(poll: Poll){

    return this._http.post("/polls", poll).map(data => data.json());
  }
  // // ++++++++++++++++++++++++++++++++
    destroy(poll :Poll){
      return this._http.delete("/polls/"+poll._id).map(data => data.json());
    }
  //   // ++++++++++++++++++++++++++++++
  // show(poll: Poll){
  //   return this._http.get("/polls/"+poll._id, poll).map(data => data.json());
  //   }
  //   // +++++++++++++++++++++++++++++++
  getPoll(poll: Poll){
    console.log("inside api + getPoll", poll);
    return this._http.get("/polls/"+poll._id).map(data => data.json());
  }
  // // +++++++++++++++++++++++++++++++++++++++++
  getPolls(){
      return this._http.get("/polls").map(data => data.json());
  }

}
