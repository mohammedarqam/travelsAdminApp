import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DriverEditPage } from '../driver-edit/driver-edit';


@IonicPage()
@Component({
  selector: 'page-driver-details',
  templateUrl: 'driver-details.html',
})
export class DriverDetailsPage {

  driver = this.navParams.get("driver")

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    console.log(this.driver);
  }

  edit(){
    this.navCtrl.push(DriverEditPage,{driver : this.driver})
  }
}
