import { Component, ViewChild } from '@angular/core';
import { Nav, ViewController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Discussion } from '../../pages/discussion/discussion';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  @ViewChild(Nav) nav: Nav;

  user: Observable<firebase.User>;
  error: any;

  constructor(public viewCtrl: ViewController, public afAuth: AngularFireAuth) {

    this.user = afAuth.authState;

  }

  loginGoogle() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
        (success) => {
          this.nav.setRoot(Discussion);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  modalhide() {
    this.viewCtrl.dismiss();
  }

}
