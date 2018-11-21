import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TabsPage } from '../pages/Supps/tabs/tabs';
import { DashboardPage } from '../pages/MainTabs/dashboard/dashboard';
import { VehiclesPage } from '../pages/MainTabs/vehicles/vehicles';
import { DriversPage } from '../pages/MainTabs/drivers/drivers';
import { AddVehiclePage } from '../pages/Vehicles/add-vehicle/add-vehicle';
import { AddDriversPage } from '../pages/Drivers/add-drivers/add-drivers';


export const firebaseCred = {
  apiKey: "AIzaSyA_40jiX-tnOYeWs-hnOTS_KP27X1zmvyw",
  authDomain: "travels-telangana.firebaseapp.com",
  databaseURL: "https://travels-telangana.firebaseio.com",
  projectId: "travels-telangana",
  storageBucket: "",
  messagingSenderId: "656804246620"
};
firebase.initializeApp(firebaseCred);

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DashboardPage,
    VehiclesPage,
    DriversPage,
    AddVehiclePage,
    AddDriversPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DashboardPage,
    VehiclesPage,
    DriversPage,
    AddVehiclePage,
    AddDriversPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
