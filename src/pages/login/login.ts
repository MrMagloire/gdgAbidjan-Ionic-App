import { Component } from '@angular/core';
import { ViewController, NavController, AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Discussion } from '../../pages/discussion/discussion';

// Network connexion
import { Network } from '@ionic-native/network';
import { ConnectivityService } from '../../providers/connectivity-service';
declare var google;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  user: Observable<firebase.User>;
  error: any;

  constructor(public viewCtrl: ViewController, public afAuth: AngularFireAuth, public navCtrl: NavController, private alertCtrl: AlertController, public network: Network, public connectivityService: ConnectivityService) {
    
    this.user = afAuth.authState;
    // this.loginGoogle();

  }

  loginGoogle() {

    this.addConnectivityListeners();

    if(this.connectivityService.isOnline()){
        console.log("online");
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(
          (success) => {
            console.log(success);
            this.viewCtrl.dismiss();
            this.navCtrl.push(
              Discussion, { user: success.user }
              );
        }).catch(
          (err) => {
          this.error = err;
          if (this.error) {
            this.reloadAlert();
            this.viewCtrl.dismiss();
          }
        });
    }
    else{
      this.presentAlert();
    }
  }

  addConnectivityListeners(){

    let onOnline = () => {
      setTimeout(() => {
        if(typeof google == "undefined"){
          this.loginGoogle();
        }
      }, 5000);
    };
    document.addEventListener('online', onOnline, false);

  }

  modalhide() {
    this.viewCtrl.dismiss();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Connexion',
      subTitle: 'Verifier votre connexion internet',
      buttons: ['Ok']
    });
    alert.present();
  }

  reloadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Connexion',
      subTitle: 'Verifier votre connexion internet et ressayer ...',
      buttons: ['Ok']
    });
    alert.present();
  }
}
