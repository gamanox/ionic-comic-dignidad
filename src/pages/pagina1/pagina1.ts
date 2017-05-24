import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';

/**
 * Generated class for the Pagina_1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html'

})
export class Pagina1Page {
  dialog: any = 1;
  pagina: any = 1;
  dialogos: any = 6;

  constructor(public navCtrl: NavController) {
    
  }

  

  swipeLeftEvent(e) {
    this.navCtrl.push(Pagina2Page, null, {animation: 'ios-transition'});
  }
  tapEvent(e) {
    // alert('tap');
    if (this.dialog > this.dialogos) {
      this.navCtrl.push(Pagina2Page, null, {animation: 'ios-transition'});
    } else {
    var dialogo = '#p'+this.pagina+'d'+this.dialog;
    console.log('dialogo: '+dialogo);
    document.querySelector(dialogo).classList.add('flipInX');
    this.dialog++;
    }
  }
  goBack() {
    this.navCtrl.pop({animation: 'ios-transition'});
  }



}
