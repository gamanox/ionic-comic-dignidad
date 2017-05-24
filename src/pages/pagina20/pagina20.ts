import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina21Page } from '../pagina21/pagina21';

/**
 * Generated class for the Pagina_20Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina20',
  templateUrl: 'pagina20.html',
})
export class Pagina20Page {
  dialog: any = 1;
  pagina: any = 20;
  dialogos: any = 6;

  constructor(public navCtrl: NavController) {
    
  }
  swipeLeftEvent(e) {
    this.navCtrl.push(Pagina21Page, null, {animation: 'ios-transition'});
  }
  tapEvent(e) {
    // alert('tap');
    if (this.dialog > this.dialogos) {
      this.navCtrl.push(Pagina21Page, null, {animation: 'ios-transition'});
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
