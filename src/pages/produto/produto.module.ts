import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoPage } from './produto';

@NgModule({
  declarations: [
    ProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoPage),
  ],
  exports: [
    ProdutoPage
  ]
})
export class ProdutoPageModule {}
