import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Pagina4Page } from '../pagina4/pagina4';

/**
 * Generated class for the Pagina_3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forro',
  templateUrl: 'forro.html'
})
export class ForroPage {
  

  constructor(public navCtrl: NavController) {
    
  }
  // swipeLeftEvent(e) {
  //   this.navCtrl.push(Pagina4Page);
  // }
  tapEvent(e) {
    alert('tap');
  }
  goBack() {
    this.navCtrl.pop();
  }



}
