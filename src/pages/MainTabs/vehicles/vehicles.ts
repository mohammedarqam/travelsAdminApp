import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddVehiclePage } from '../../Vehicles/add-vehicle/add-vehicle';
import { AngularFireDatabase } from 'angularfire2/database';
import { VehicleDetailsPage } from '../../Vehicles/vehicle-details/vehicle-details';


@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {

  vehicles : Array<any> = [];

  loads = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public loadingCtrl : LoadingController,
  public navParams: NavParams,
  ) {
    this.getVehicles();
  }

  getVehicles(){
    this.loads.present();
    this.db.list("Vehicles").snapshotChanges().subscribe(vehicleSnap=>{
      this.vehicles = [];

      vehicleSnap.forEach(snap=>{
        let temp : any = snap.payload.val();
        temp.key = snap.key;
        this.vehicles.push(temp);
      })
      this.loads.dismiss();
    })
  }


  gtDetails(v){
    this.navCtrl.push(VehicleDetailsPage,{vehicle : v})
  }



  gtAddVehicles(){
    this.navCtrl.push(AddVehiclePage);
  }



}
