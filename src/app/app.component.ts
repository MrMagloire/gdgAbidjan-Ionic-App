import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Firebase Auth
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

// browser for external link
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

// Mes pages
import { CellulePage } from '../pages/cellule/cellule';
// import { Discussion } from '../pages/discussion/discussion';
import { Login } from '../pages/login/login';
import { EventPage } from '../pages/event/event';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  user: Observable<firebase.User>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController, public afAuth: AngularFireAuth, private alertCtrl: AlertController, public inab : InAppBrowser) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Cellules', component: CellulePage },
      // { title: 'Nos Echanges', component: Discussion }
      { title: 'Events', component: EventPage }
    ];
    this.user = this.afAuth.authState;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  loginModal() {
    // Function of login
    let profileModal = this.modalCtrl.create(Login);
    profileModal.present();
  }

  gotoHome() {
    // Direction to home page
    this.nav.setRoot(HomePage);
  }

  ExitApp() {
    // exit app
    console.log('Exit');
    this.platform.exitApp();
  }

  exitAlert() {
    let alert = this.alertCtrl.create({
      title: 'Humm ... GooOOoogle ',
      message: 'Voulez vous nous quitter ... ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log('Yes clicked');
            this.ExitApp();
          }
        }
      ]
    });
    alert.present();
  }

  myPage(url){
    this.inab.create(url,'_blank');
  }

}
