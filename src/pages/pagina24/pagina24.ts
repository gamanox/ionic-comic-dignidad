import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina25Page } from '../pagina25/pagina25';

/**
 * Generated class for the Pagina_24Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina24',
  templateUrl: 'pagina24.html',
})
export class Pagina24Page {
  
  dialog: any = 1;
  pagina: any = 24;
  dialogos: any = 6;
  constructor(public navCtrl: NavController) {
    
  }
  swipeLeftEvent(e) {
    this.navCtrl.push(Pagina25Page, null, {animation: 'ios-transition'});
  }
  tapEvent(e) {
    // alert('tap');
    if (this.dialog > this.dialogos) {
      this.navCtrl.push(Pagina24Page, null, {animation: 'ios-transition'});
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
