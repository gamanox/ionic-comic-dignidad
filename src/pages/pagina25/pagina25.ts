import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForroPage } from '../forro/forro';

/**
 * Generated class for the Pagina_25Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina25',
  templateUrl: 'pagina25.html',
})
export class Pagina25Page {
  dialog: any = 1;
  pagina: any = 25;
  dialogos: any = 4;

  constructor(public navCtrl: NavController) {
    
  }
  swipeLeftEvent(e) {
    this.navCtrl.push(ForroPage, null, {animation: 'ios-transition'});
  }
  tapEvent(e) {
    // alert('tap');
    if (this.dialog > this.dialogos) {
      this.navCtrl.push(ForroPage, null, {animation: 'ios-transition'});
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
