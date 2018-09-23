import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'jquery';
import 'popper.js';
import 'bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  totalTweets: number;
  tweets = [];
  search: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.callService()
      .subscribe((resp: any) => {
        this.totalTweets = resp.length;
        for (let i = 0; i < this.totalTweets; i++) {
          let hashtags = [];
          let random = Math.floor((Math.random() * 2));
          if (random == 1) hashtags.push('#Python');
          random = Math.floor((Math.random() * 2));
          if (random == 1) hashtags.push('#AWS');
          random = Math.floor((Math.random() * 2));
          if (random == 1) hashtags.push('#Java');
          random = Math.floor((Math.random() * 2));
          if (random == 1) hashtags.push('#NET');
          this.tweets.push(
            {
              tweet: resp[i].title,
              likes: Math.floor((Math.random() * 10000) + 1),
              replies: Math.floor((Math.random() * 10000) + 1),
              retweets: Math.floor((Math.random() * 10000) + 1),
              hashtags: hashtags,
              hashtag: hashtags.join('-'),
              date: new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)),
            }
          );
        }
      });
  }

  callService() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }

  get viewTweets() {
    if (this.tweets) {
      return this.tweets.filter(e => !this.search || e.hashtags.indexOf(this.search) >= 0);
    } else return [];
  }
}
