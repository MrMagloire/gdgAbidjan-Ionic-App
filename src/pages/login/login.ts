import { Component, ViewChild } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Discussion } from '../../pages/discussion/discussion';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  user: Observable<firebase.User>;
  error: any;

  constructor(public viewCtrl: ViewController, public afAuth: AngularFireAuth, public navCtrl: NavController) {

    this.user = afAuth.authState;

  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
      (success) => {
        this.viewCtrl.dismiss();
        this.navCtrl.push(Discussion);
    }).catch(
      (err) => {
      this.error = err;
    });
  }

  modalhide() {
    this.viewCtrl.dismiss();
  }

}
