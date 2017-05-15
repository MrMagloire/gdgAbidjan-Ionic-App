import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';

// Import the AF2 Module
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class Discussion {

  messages: FirebaseListObservable<any>;
  // btn = $('button');
  // fb = firebase;
  // var messages = fb.child("messages");
  // var btn = $('button');
  // var wrap = $('.wrapper');
  // var input = $('input.message');
  // var usernameInput = $('input.username');

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    // relative URL, uses the database url provided in bootstrap
    this.messages = db.list('/messages');
  }

}
