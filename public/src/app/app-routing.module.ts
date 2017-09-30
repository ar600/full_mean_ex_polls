import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import {CreatePollComponent} from './create-poll/create-poll.component'
import {PollDetailComponent} from './poll-detail/poll-detail.component'

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: CreatePollComponent,
  //   children: []
  // },

  // { path: 'products',  component: ProductListComponent },
  { path: 'polls/:id',  component: PollDetailComponent },
  { path: 'create',  component: CreatePollComponent },
  { path: 'gohome', redirectTo: '/' }
  ,
  // { path: '**',
  // component: PagenotfoundComponent,
  // children : []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
