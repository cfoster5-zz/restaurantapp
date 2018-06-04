import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {

  restaurantName;
  restaurantList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: FirebaseProvider, public db: AngularFireDatabase) {
    this.firebase.getList().subscribe(lists => {
      console.log("lists", lists);
      this.restaurantList = lists
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  addRestaurant(){
    console.log(this.restaurantName)
    this.firebase.addRestaurant(this.restaurantName)
    this.restaurantName = ""
  }

}
