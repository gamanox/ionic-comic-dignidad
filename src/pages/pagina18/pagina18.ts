import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina19Page } from '../pagina19/pagina19';

/**
 * Generated class for the Pagina_18Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina18',
  templateUrl: 'pagina18.html',
})
export class Pagina18Page {
  dialog: any = 1;
  pagina: any = 18;
  dialogos: any = 3;  

  constructor(public navCtrl: NavController) {
    
  }
  swipeLeftEvent(e) {
    this.navCtrl.push(Pagina19Page, null, {animation: 'ios-transition'});
  }
  tapEvent(e) {
    // alert('tap');
    if (this.dialog > this.dialogos) {
      this.navCtrl.push(Pagina19Page, null, {animation: 'ios-transition'});
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
