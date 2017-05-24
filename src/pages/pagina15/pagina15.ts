import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina16Page } from '../pagina16/pagina16';

/**
 * Generated class for the Pagina_15Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina15',
  templateUrl: 'pagina15.html',
})
export class Pagina15Page {
  dialog: any = 1;
  pagina: any = 15;
  dialogos: any = 4;

  constructor(public navCtrl: NavController) {
    
  }
  swipeLeftEvent(e) {
    this.navCtrl.push(Pagina16Page, null, {animation: 'ios-transition'});
  }
  tapEvent(e) {
    // alert('tap');
    if (this.dialog > this.dialogos) {
      this.navCtrl.push(Pagina16Page, null, {animation: 'ios-transition'});
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
