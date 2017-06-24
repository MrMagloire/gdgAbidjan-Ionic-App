import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

// browser for external link
// import { InAppBrowser } from '@ionic-native/in-app-browser';

// Network connexion
import { Network } from '@ionic-native/network';
import { ConnectivityService } from '../../providers/connectivity-service';
declare var google;

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

  ngDoCheck(){
    setInterval(
      this.scroll(),7000
    );
  }

  @ViewChild(Content) content: Content;

  messages: FirebaseListObservable<any>;
  user: any;
  messageToSend: any;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public navParams: NavParams, public loadingCtrl: LoadingController, public afAuthd: AngularFireAuth, public network: Network, public connectivityService: ConnectivityService, private alertCtrl: AlertController) {
    this.setMessages();
    this.messageToSend = "";
    // user
    this.user = navParams.get('user');
    this.user.name = this.user.email;
    // this.content.scrollToBottom();
  }

  GoBack(){
    console.log('Back');
    this.navCtrl.pop(HomePage);
  }

  Loggout(){
    console.log('Logout');
    this.navCtrl.pop(HomePage);
    this.afAuthd.auth.signOut();
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
    //this.iab.create(url,'_blank');
  }

  setMessages() {
    // relative URL, uses the database url provided in bootstrap
    this.addConnectivityListeners();
    if(this.connectivityService.isOnline()){
      this.messages = this.db.list('/messages',
      {
        query: {
          limitToLast: 15,
          orderByKey: true
        }
      });
      this.presentLoading();
    }
    else{
      this.presentAlert();
      this.GoBack();
    }
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
  }

  scroll() {
    // set the scrollLeft to 0px, and scrollTop to 500px
    // the scroll duration should take 200ms
    console.log('scrolling');
    this.content.scrollToBottom(2000);
  }

  addConnectivityListeners(){
    let onOnline = () => {
      setTimeout(() => {
        if(typeof google == "undefined"){
          this.setMessages();
        }
      }, 5000);
    };
    document.addEventListener('online', onOnline, false);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Connexion',
      subTitle: 'Verifier votre connexion internet',
      buttons: ['Ok']
    });
    alert.present();
  }

}
