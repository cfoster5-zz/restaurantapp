import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  restaurants;

  constructor(public navCtrl: NavController) {
    console.log("Constructor fired");
    this.initializeRestaurants(); //Fires function initializeRestaurants when constructor is loaded; fires before ionViewDidLoad
  }

  initializeRestaurants() {
    this.restaurants = [
      'Applebee’s',
      'Azzip',
      'Bandana’s',
      'Bar Louie',
      'Biaggi’s',
      'Big Bang',
      'Bob Evans',
      'Bonefish',
      'Buffalo Wild Wings',
      'Chick-fil-a',
      'Chili’s',
      'Comfort',
      'Cracker Barrel',
      'Culver’s',
      'Five Guys',
      'Fujiyama',
      'Gersthaus',
      'Hacienda',
      'IHOP',
      'Logan’s',
      'Longhorn',
      'Los Bravos',
      'McAlister’s',
      'Mission BBQ',
      'Mod Pizza',
      'Moe’s',
      'O’Charley’s',
      'Old Chicago',
      'Olive Garden',
      'Outback Steakhouse',
      'Panera',
      'Pie Pan',
      'Rafferty’s',
      'Red Lobster',
      'Red Robin',
      'Steak n Shake',
      'Texas Roadhouse',
      'TGI Friday’s',
      'Turoni’s',
      'Western Ribeye',
      'Zuki'
    ];
  }

  getRestaurants(ev) {
    // Reset items back to all of the items
    this.initializeRestaurants();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items --> If search is empty, show all items in array
    if (val && val.trim() != '') {
      this.restaurants = this.restaurants.filter((restaurant) => {
        return (restaurant.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
