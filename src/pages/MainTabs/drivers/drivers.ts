import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddDriversPage } from '../../Drivers/add-drivers/add-drivers';
import { AngularFireDatabase } from 'angularfire2/database';
import { DriverDetailsPage } from '../../Drivers/driver-details/driver-details';


@IonicPage()
@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html',
})
export class DriversPage {

  drivers : Array<any> = [];

  loads = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public loadingCtrl : LoadingController,
  public navParams: NavParams
  ) {
    this.getDrivers();
  }
  getDrivers(){
    this.loads.present();
    this.db.list("Drivers").snapshotChanges().subscribe(vehicleSnap=>{
      this.drivers = [];
      vehicleSnap.forEach(snap=>{
        let temp : any = snap.payload.val();
        temp.key = snap.key;
        this.drivers.push(temp);
      })
      this.loads.dismiss();
    })
  }


  gtDetails(d){
    this.navCtrl.push(DriverDetailsPage,{driver : d})
  }

  gtAddDriver(){
    this.navCtrl.push(AddDriversPage);
  }

}
