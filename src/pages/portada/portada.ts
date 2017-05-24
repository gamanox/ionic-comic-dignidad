import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Pagina1Page } from '../../pages/pagina1/pagina1';


@Component({
  selector: 'page-portada',
  templateUrl: 'portada.html'
})
export class PortadaPage {
  pagina1Page = Pagina1Page;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }
  ionViewDidEnter() {
      this.menuCtrl.swipeEnable(false, 'menu1');
    }
}
