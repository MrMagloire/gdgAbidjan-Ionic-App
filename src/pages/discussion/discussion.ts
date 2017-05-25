import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  btn = $('button');
  wrap = $('.wrapper');
  input = $('input.message');
  usernameInput = $('input.username');

  constructor(public navCtrl: NavController, db: AngularFireDatabase, private _sanitizer: DomSanitizer) {
    // relative URL, uses the database url provided in bootstrap
    this.messages = db.list('/messages');

    // this.input = this.input.replace(/<script[^>]*?>.*?<\/script>/gi, '').
    //        replace(/<[\/\!]*?[^<>]*?>/gi, '').
    //        replace(/<style[^>]*?>.*?<\/style>/gi, '').
    //        replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');

    // this.usernameInput.on('keyup', function(e) {
    //   if (e.keyCode === 13 && this.usernameInput.val().length > 0) {
    //     var getTxt = this.usernameInput.val();
    //     this.user.push(getTxt);
    //     this.usernameInput.val('');
    //     $('.initModal').css('display', 'none');
    //     console.log(this.user);
    //   }
    // });

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
