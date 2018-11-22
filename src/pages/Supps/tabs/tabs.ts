import { Component } from '@angular/core';
import { DashboardPage } from '../../MainTabs/dashboard/dashboard';
import { VehiclesPage } from '../../MainTabs/vehicles/vehicles';
import { DriversPage } from '../../MainTabs/drivers/drivers';
import { BookingsPage } from '../../Bookings/bookings/bookings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root =  DashboardPage;
  tab2Root = BookingsPage;
  tab3Root = VehiclesPage;
  tab4Root = DriversPage;

  constructor() {

  }
}
