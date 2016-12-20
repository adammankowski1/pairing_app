import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { SetAirportPage } from '../pages/settings/settingsModals/set-airport';
//Providers
import { SettingsStorage } from '../providers/settings-storage';
import { Api } from '../providers/api';

@NgModule({
  declarations: [
    MyApp,
	LoginPage,
  SettingsPage,
  SetAirportPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	LoginPage,
  SettingsPage,
  SetAirportPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, SettingsStorage, Api]
})
export class AppModule {}
