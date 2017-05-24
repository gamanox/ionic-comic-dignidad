import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PortadaPage } from '../pages/portada/portada';
import { Pagina1Page } from '../pages/pagina1/pagina1';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { Pagina3Page } from '../pages/pagina3/pagina3';
import { Pagina4Page } from '../pages/pagina4/pagina4';
import { Pagina5Page } from '../pages/pagina5/pagina5';
import { Pagina6Page } from '../pages/pagina6/pagina6';
import { Pagina7Page } from '../pages/pagina7/pagina7';
import { Pagina8Page } from '../pages/pagina8/pagina8';
import { Pagina9Page } from '../pages/pagina9/pagina9';
import { Pagina10Page } from '../pages/pagina10/pagina10';
import { Pagina11Page } from '../pages/pagina11/pagina11';
import { Pagina12Page } from '../pages/pagina12/pagina12';
import { Pagina13Page } from '../pages/pagina13/pagina13';
import { Pagina14Page } from '../pages/pagina14/pagina14';
import { Pagina15Page } from '../pages/pagina15/pagina15';
import { Pagina16Page } from '../pages/pagina16/pagina16';
import { Pagina17Page } from '../pages/pagina17/pagina17';
import { Pagina18Page } from '../pages/pagina18/pagina18';
import { Pagina19Page } from '../pages/pagina19/pagina19';
import { Pagina20Page } from '../pages/pagina20/pagina20';
import { Pagina21Page } from '../pages/pagina21/pagina21';
import { Pagina22Page } from '../pages/pagina22/pagina22';
import { Pagina23Page } from '../pages/pagina23/pagina23';
import { Pagina24Page } from '../pages/pagina24/pagina24';
import { Pagina25Page } from '../pages/pagina25/pagina25';
import { ForroPage } from '../pages/forro/forro';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PortadaPage,
    Pagina1Page,
    Pagina2Page,
    Pagina3Page,
    Pagina4Page,
    Pagina5Page,
    Pagina6Page,
    Pagina7Page,
    Pagina8Page,
    Pagina9Page,
    Pagina10Page,
    Pagina11Page,
    Pagina12Page,
    Pagina13Page,
    Pagina14Page,
    Pagina15Page,
    Pagina16Page,
    Pagina17Page,
    Pagina18Page,
    Pagina19Page,
    Pagina20Page,
    Pagina21Page,
    Pagina22Page,
    Pagina23Page,
    Pagina24Page,
    Pagina25Page,
    ForroPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        swipeBackEnabled: false
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PortadaPage,
    Pagina1Page,
    Pagina2Page,
    Pagina3Page,
    Pagina4Page,
    Pagina5Page,
    Pagina6Page,
    Pagina7Page,
    Pagina8Page,
    Pagina9Page,
    Pagina10Page,
    Pagina11Page,
    Pagina12Page,
    Pagina13Page,
    Pagina14Page,
    Pagina15Page,
    Pagina16Page,
    Pagina17Page,
    Pagina18Page,
    Pagina19Page,
    Pagina20Page,
    Pagina21Page,
    Pagina22Page,
    Pagina23Page,
    Pagina24Page,
    Pagina25Page,
    ForroPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
}
