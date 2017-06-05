import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
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

  @ViewChild(Content) content: Content;

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
    // this.content.scrollToBottom();
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
  shortLoading() {
    let loader = this.loadingCtrl.create({
      content: "📲🕐🕑",
      duration: 2000
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
      text : this.messageToSend,
      photoUrl: this.user.photoURL || './assets/img/profile_placeholder.png'
    });
    this.refresh();
  }
  refresh() {
    this.messageToSend = " ";
    this.shortLoading();
    this.setMessages();
    this.messageToSend = "";
    // this.scroll();
  }

  scroll() {
    // set the scrollLeft to 0px, and scrollTop to 500px
    // the scroll duration should take 200ms
    this.content.scrollToBottom();
  }

}
