import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-random',
  templateUrl: 'random.html'
})
export class RandomPage {

  restaurant: string;

  constructor(public navCtrl: NavController) {
    this.randomize(); //FIRES RANDOMIZE() WHEN CONSTRUCTOR IS FIRED
    // var restaurants = [
    //     'Applebee’s',
    //     'Azzip',
    //     'Bandana’s',
    //     'Bar Louie',
    //     'Biaggi’s',
    //     'Big Bang',
    //     'Bob Evans',
    //     'Bonefish',
    //     'Buffalo Wild Wings',
    //     'Chick-fil-a',
    //     'Chili’s',
    //     'Comfort',
    //     'Cracker Barrel',
    //     'Culver’s',
    //     'Five Guys',
    //     'Fujiyama',
    //     'Gersthaus',
    //     'Hacienda',
    //     'IHOP',
    //     'Logan’s',
    //     'Longhorn',
    //     'Los Bravos',
    //     'McAlister’s',
    //     'Mission BBQ',
    //     'Mod Pizza',
    //     'Moe’s',
    //     'O’Charley’s',
    //     'Old Chicago',
    //     'Olive Garden',
    //     'Outback Steakhouse',
    //     'Panera',
    //     'Pie Pan',
    //     'Rafferty’s',
    //     'Red Lobster',
    //     'Red Robin',
    //     'Steak n Shake',
    //     'Texas Roadhouse',
    //     'TGI Friday’s',
    //     'Turoni’s',
    //     'Western Ribeye',
    //     'Zuki'
    //   ];
    //
    // // var restaurant = restaurants[Math.floor(Math.random()*restaurants.length)]; //Was not working
    // this.restaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
    // console.log(this.restaurant);
  }

  randomize(){
    // this.constructor() //FIRE CONSTRUCTOR WHEN RANDOMIZE() IS FIRED
    var restaurants = [
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

    // var restaurant = restaurants[Math.floor(Math.random()*restaurants.length)]; //Was not working
    this.restaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
    console.log(this.restaurant);
  }

}
