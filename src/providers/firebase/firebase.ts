import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseProvider {

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getList(): FirebaseListObservable<any> {
    return this.db.list('list', {
      query: {
        orderByChild:'order',
      }
    });
  }

  addRestaurant(restaurantName) {
    firebase.database().ref('list').push({ name: restaurantName });
  }

}
