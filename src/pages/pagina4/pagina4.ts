import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina5Page } from '../pagina5/pagina5';

/**
 * Generated class for the Pagina_4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina4',
  templateUrl: 'pagina4.html',
})
export class Pagina4Page {
  dialog: any = 1;
  pagina: any = 4;
  dialogos: any = 5;

  constructor(public navCtrl: NavController) {
    
  }
  swipeLeftEvent(e) {
    this.navCtrl.push(Pagina5Page, null, {animation: 'ios-transition'});
  }
  tapEvent(e) {
    // alert('tap');
    if (this.dialog > this.dialogos) {
      this.navCtrl.push(Pagina5Page, null, {animation: 'ios-transition'});
    } else {
    var dialogo = '#p'+this.pagina+'d'+this.dialog;
    console.log('dialogo: '+dialogo);
    document.querySelector(dialogo).classList.add('flipInX');
    this.dialog++;
    }
  }
  goBack() {
    this.navCtrl.pop();
  }



}
