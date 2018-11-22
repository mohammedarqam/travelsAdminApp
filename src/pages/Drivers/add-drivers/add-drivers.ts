import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-add-drivers',
  templateUrl: 'add-drivers.html',
})
export class AddDriversPage {

  name : string;
  numberL : string;
  numberP : string;
  aadhar : string;
  rating : string = "0";

  loads = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(
  public navCtrl: NavController, 
  public toastCtrl : ToastController,
  public loadingCtrl : LoadingController,
  public navParams: NavParams
  ) {
  }

  checkData(){
    if(this.name){
      if(this.numberL){
        if(this.aadhar){
        if(this.aadhar){
          this.addVehicle();
        }else{this.presentToast("Enter the Driver Aadhar","top");}
      }else{this.presentToast("Enter the Driver Phone Number","top");}
    }else{this.presentToast("Enter the Driver Number","top");}
    }else{this.presentToast("Enter the Driver Name","top");}
  }

  addVehicle(){
    this.loads.present();
    firebase.database().ref("Drivers").push({
      DriverName : this.name,
      LicenceNumber  : this.numberL,
      Phone  : this.numberP,
      Aadhar : this.aadhar,
      Rating : this.rating,
    }).then(()=>{
      this.navCtrl.pop();
      this.loads.dismiss();
      this.presentToast("Driver Added","bottom");
    })
  }

  presentToast(msg,pos) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: pos
    });
  
    toast.present();
  }

  capsName(name){
    this.name = name.toUpperCase();
  }
  capsNum(numberL){
    this.numberL = numberL.toUpperCase();
  }
}
