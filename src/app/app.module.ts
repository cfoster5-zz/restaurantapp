import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database-deprecated';
// import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBDfQuQQnosmf47h8GGJ_Cns03bMyb0-VM",
  authDomain: "restaurantapp-68e2f.firebaseapp.com",
  databaseURL: "https://restaurantapp-68e2f.firebaseio.com",
  projectId: "restaurantapp-68e2f",
  storageBucket: "restaurantapp-68e2f.appspot.com",
  messagingSenderId: "635105165174"
};

import { RandomPage } from '../pages/random/random';
import { ContactPage } from '../pages/contact/contact';
import { ListPage } from '../pages/list/list';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';

@NgModule({
  declarations: [
    MyApp,
    RandomPage,
    ContactPage,
    ListPage,
    WishlistPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RandomPage,
    ContactPage,
    ListPage,
    WishlistPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireDatabase,
    FirebaseProvider
  ]
})
export class AppModule { }
