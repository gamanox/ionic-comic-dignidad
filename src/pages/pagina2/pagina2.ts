import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina3Page } from '../pagina3/pagina3';
/**
 * Generated class for the Pagina2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  dialog: any = 1;
  pagina: any = 2;
  dialogos: any = 5;
  constructor(public navCtrl: NavController) {
  }
  swipeLeftEvent(e) {
    this.navCtrl.push(Pagina3Page, null, {animation: 'ios-transition'});
  }
  tapEvent(e) {
    // alert('tap');
    if (this.dialog > this.dialogos) {
      this.navCtrl.push(Pagina3Page, null, {animation: 'ios-transition'});
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
