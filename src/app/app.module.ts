import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

// Mes pages
import { CellulePage } from '../pages/cellule/cellule';
import { Discussion } from '../pages/discussion/discussion';
import { VoirplusPage } from '../pages/voirplus/voirplus';
import { Login } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// network connection
import { Network } from '@ionic-native/network';
import { ConnectivityService } from '../providers/connectivity-service';

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
    CellulePage,
    Discussion,
    VoirplusPage,
    Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CellulePage,
    Discussion,
    VoirplusPage,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    ConnectivityService,
    InAppBrowser
  ]
})
export class AppModule {}
