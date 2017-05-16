import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProdutoPage} from "../produto/produto";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onProduto(){
    this.navCtrl.push(ProdutoPage,{codigo: 'produto21'})
  }

}
