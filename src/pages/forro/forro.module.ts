import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForroPage } from './forro';

@NgModule({
  declarations: [
    ForroPage,
  ],
  imports: [
    IonicPageModule.forChild(ForroPage),
  ],
  exports: [
    ForroPage
  ]
})
export class ForroPageModule {}
