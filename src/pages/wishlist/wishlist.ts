import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {

  restaurantName;
  restaurantList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  addRestaurant(){
    console.log(this.restaurantName)
    this.restaurantList.push(this.restaurantName)
    this.restaurantName = ""
  }

}
