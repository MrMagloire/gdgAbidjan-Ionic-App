import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Jquery integration
import * as $ from 'jquery';

import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import { HomePage } from '../../pages/home/home';

// Import the AF2 Module
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})

export class Discussion {

  messages: FirebaseListObservable<any>;
  user: any;

  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) {
    // relative URL, uses the database url provided in bootstrap
    this.messages = db.list('/messages');
    // user
    this.user = navParams.get('user');
    this.user.name = this.user.email;

  }

  GoBack(){
    console.log('click');
      // That's right, we're pushing to ourselves!
    this.navCtrl.pop(HomePage);
  }
  transform() {
      return '';
  }

}
