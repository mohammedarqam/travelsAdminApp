import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-add-vehicle',
  templateUrl: 'add-vehicle.html',
})
export class AddVehiclePage {

  name : string;
  numberP : string;
  rph : string;

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
      if(this.numberP){
        if(this.rph){
          this.addVehicle();
        }else{this.presentToast("Enter a Rate","top");}
      }else{this.presentToast("Enter a Vehicle Number","top");}
    }else{this.presentToast("Enter a Vehicle Name","top");}
  }

  addVehicle(){
    this.loads.present();
    firebase.database().ref("Vehicles").push({
      VehicleName : this.name,
      VehicleNumber  : this.numberP,
      RatePerHour : this.rph, 
    }).then(()=>{
      this.navCtrl.pop();
      this.loads.dismiss();
      this.presentToast("Vehicle Added","bottom");
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
  capsNum(numberP){
    this.numberP = numberP.toUpperCase();
  }
}
