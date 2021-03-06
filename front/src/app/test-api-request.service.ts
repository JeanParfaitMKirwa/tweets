import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from './tweet';

@Injectable({
  providedIn: 'root'
})
export class TestApiRequestService {
  private tweetsUrl = "http://localhost:8080/hello";
  private tentTweets= "http://localhost:8080/allTen";
  private mesTweets: Tweet[] = [];

  constructor(private httpClient: HttpClient) { }

  getTweets() {
     return this.httpClient.get<Tweet>(this.tweetsUrl);
  }

  recupereTweets(r: any) {
    this.mesTweets = r;
  }

  getTenTweets() {
    return this.httpClient.get<Tweet[]>(this.tentTweets);
 }

  

}
