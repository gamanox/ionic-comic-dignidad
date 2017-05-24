import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

// import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PortadaPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Portada', component: PortadaPage },
      { title: 'Página 1', component: Pagina1Page },
      { title: 'Página 2', component: Pagina2Page },
      { title: 'Página 3', component: Pagina3Page },
      { title: 'Página 4', component: Pagina4Page },
      { title: 'Página 5', component: Pagina5Page },
      { title: 'Página 6', component: Pagina6Page },
      { title: 'Página 7', component: Pagina7Page },
      { title: 'Página 8', component: Pagina8Page },
      { title: 'Página 9', component: Pagina9Page },
      { title: 'Página 10', component: Pagina10Page },
      { title: 'Página 11', component: Pagina11Page },
      { title: 'Página 12', component: Pagina12Page },
      { title: 'Página 13', component: Pagina13Page },
      { title: 'Página 14', component: Pagina14Page },
      { title: 'Página 15', component: Pagina15Page },
      { title: 'Página 16', component: Pagina16Page },
      { title: 'Página 17', component: Pagina17Page },
      { title: 'Página 18', component: Pagina18Page },
      { title: 'Página 19', component: Pagina19Page },
      { title: 'Página 20', component: Pagina20Page },
      { title: 'Página 21', component: Pagina21Page },
      { title: 'Página 22', component: Pagina22Page },
      { title: 'Página 23', component: Pagina23Page },
      { title: 'Página 24', component: Pagina24Page },
      { title: 'Página 25', component: Pagina25Page },
      { title: 'Forro', component: ForroPage }
      // { title: 'Página 2', component: Pagina1Page },
      // { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  
}
