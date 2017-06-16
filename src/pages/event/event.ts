import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {

  MeetupEvents: any;
  constructor(public navCtrl: NavController, public http: Http, private iab: InAppBrowser) {
    this.MeetupEvents = [];
    this.http.get('https://api.meetup.com/2/events?&group_urlname=GDGAbidjan&page=20').map(res => res.json()).subscribe(data => {
        this.MeetupEvents = data.results;
        console.log(this.MeetupEvents);
    }
    ,
    err => {
        console.log("Oops!");
    }
    );
  }
  launch(url) {
    this.iab.create(url,'_blank');
  }
}