import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { DriversPage } from '../../MainTabs/drivers/drivers';


@IonicPage()
@Component({
  selector: 'page-driver-edit',
  templateUrl: 'driver-edit.html',
})
export class DriverEditPage {

  driver = this.navParams.get("driver");

  name: string = this.driver.DriverName;
  numberL: string = this.driver.LicenceNumber;
  numberP: string = this.driver.Phone;
  aadhar: string = this.driver.Aadhar;
  rating: string = this.driver.Rating;

  loads = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams
  ) {
  }

  checkData() {
    if (this.name) {
      if (this.numberL) {
        if (this.aadhar) {
          if (this.aadhar) {
            this.addVehicle();
          } else { this.presentToast("Enter the Driver Aadhar", "top"); }
        } else { this.presentToast("Enter the Driver Phone Number", "top"); }
      } else { this.presentToast("Enter the Driver Number", "top"); }
    } else { this.presentToast("Enter the Driver Name", "top"); }
  }

  addVehicle() {
    this.loads.present();
    firebase.database().ref("Drivers").child(this.driver.key).set(this.driver).then(() => {
      firebase.database().ref("Drivers").child(this.driver.key).child("key").remove().then(() => {
        this.navCtrl.popTo(DriversPage);
        this.loads.dismiss();
        this.presentToast("Driver Edited", "bottom");

      })
    })
  }

  presentToast(msg, pos) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: pos
    });

    toast.present();
  }

  capsName(name) {
    this.name = name.toUpperCase();
  }
  capsNum(numberL) {
    this.numberL = numberL.toUpperCase();
  }
}
