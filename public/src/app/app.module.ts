import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollsListComponent } from './polls-list/polls-list.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
// import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    CreatePollComponent,
    PollsListComponent,
    PollDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
