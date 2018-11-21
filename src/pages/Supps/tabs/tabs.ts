import { Component } from '@angular/core';
import { DashboardPage } from '../../MainTabs/dashboard/dashboard';
import { VehiclesPage } from '../../MainTabs/vehicles/vehicles';
import { DriversPage } from '../../MainTabs/drivers/drivers';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root =  DashboardPage;
  tab2Root = VehiclesPage;
  tab3Root = DriversPage;

  constructor() {

  }
}
