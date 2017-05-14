import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

// Mes pages
import { CellulePage } from '../pages/cellule/cellule';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDirdyhBk1xhsGx6qgHMn_ao2E9ASlcUeA",
  authDomain: "gdgabidjan-836c6.firebaseapp.com",
  databaseURL: "https://gdgabidjan-836c6.firebaseio.com",
  projectId: "gdgabidjan-836c6",
  storageBucket: "gdgabidjan-836c6.appspot.com",
  messagingSenderId: "146223673992"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CellulePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CellulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
