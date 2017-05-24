import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pagina12Page } from './pagina12';

@NgModule({
  declarations: [
    Pagina12Page,
  ],
  imports: [
    IonicPageModule.forChild(Pagina12Page),
  ],
  exports: [
    Pagina12Page
  ]
})
export class Pagina12PageModule {}
