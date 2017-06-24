import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { InAppBrowser } from '@ionic-native/in-app-browser';

// Network connexion
import { Network } from '@ionic-native/network';
import { ConnectivityService } from '../../providers/connectivity-service';
declare var meetup;

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {

  MeetupEvents: any;
  constructor(public navCtrl: NavController, public http: Http,
    // private iab: InAppBrowser,
    private alertCtrl: AlertController, public network: Network, public connectivityService: ConnectivityService) {
    this.MeetupEvents = [];
    this.loadEvent();
  }
  launch(url) {
    //this.iab.create(url,'_blank');
  }

  loadEvent() {
    this.addConnectivityListeners();
    if(this.connectivityService.isOnline()){
        console.log("online");
        this.http.get('https://api.meetup.com/2/events?&group_urlname=GDGAbidjan&page=20').map(res => res.json()).subscribe(data => {
            this.MeetupEvents = data.results;
            console.log(this.MeetupEvents);
        },
        err => {
            console.log("Oops!");
        });
    }
    else{
      this.presentAlert();
    }
  }

  addConnectivityListeners(){
    let onOnline = () => {
      setTimeout(() => {
        if(typeof meetup == "undefined"){
          this.loadEvent();
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