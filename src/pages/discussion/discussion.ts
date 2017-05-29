import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

// browser for external link
import { InAppBrowser } from '@ionic-native/in-app-browser';

// Jquery integration
// import * as $ from 'jquery';

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
  messageToSend: any;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public navParams: NavParams, public loadingCtrl: LoadingController, private iab: InAppBrowser, public afAuthd: AngularFireAuth) {
    this.setMessages();
    this.messageToSend = "";
    // user
    this.user = navParams.get('user');
    this.user.name = this.user.email;

    this.presentLoading();
  }

  GoBack(){
    console.log('click');
      // That's right, we're pushing to ourselves!
      this.afAuthd.auth.signOut();
      this.navCtrl.pop(HomePage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Patientez SVP ...",
      duration: 3000
    });
    loader.present();
  }

  launch(url) {
    this.iab.create(url,'_blank');
  }

  setMessages() {
    // relative URL, uses the database url provided in bootstrap
    this.messages = this.db.list('/messages',
    {
      query: {
        limitToLast: 12,
        orderByKey: true
      }
    });
  }

  sendMessages() {
    // relative URL, uses the database url provided in bootstrap
    this.messages.push({
      name: this.user.displayName,
      text : this.messageToSend
    });
  }

}
