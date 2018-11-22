import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-vehicle-details',
  templateUrl: 'vehicle-details.html',
})
export class VehicleDetailsPage {

  vehicle = this.navParams.get("vehicle")

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    console.log(this.vehicle);
  }


}
