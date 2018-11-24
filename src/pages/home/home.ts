import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private calendar: Calendar, private platform : Platform) {
    //calendars = [];
    this.platform.ready().then(() => {
      console.log(this.calendar.listCalendars())/*.then(data => {
        console.log(data);
        //this.calendars = data;
      });*/
    })

  }

}
