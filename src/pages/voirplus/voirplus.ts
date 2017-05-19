import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-voirplus',
  templateUrl: 'voirplus.html'
})
export class VoirplusPage {
  selectedCellule: any;
  cellules: Array<{title: string, logo: string, responsableFirstName: string, responsableLastName: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedCellule = navParams.get('cellule');
  }
}
