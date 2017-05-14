import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cellule',
  templateUrl: 'cellule.html'
})
export class CellulePage {

  cellules: Array<{title: string, logo: string, responsableFirstName: string, responsableLastName: string}>;

  constructor(public navCtrl: NavController) {

    // liste des cellules
    this.cellules = [
      { title: 'Google Android', logo: '', responsableFirstName: 'N’ZI', responsableLastName:'Dorgeles' },
      { title: 'Google +', logo: '', responsableFirstName: 'ESSI', responsableLastName:'Thierry' },
      { title: 'Google Map', logo: '', responsableFirstName: 'ANGORA', responsableLastName:'Yao Magloire' },
      { title: 'Google WebMasterTools', logo: '', responsableFirstName: 'KOUYA', responsableLastName:'Arnold' },
      { title: 'Google HTML5', logo: '', responsableFirstName: 'ANGORA', responsableLastName:'Yao Magloire' },
      { title: 'Google Youtube', logo: '', responsableFirstName: 'KOUAKOU', responsableLastName:'Bénédicte' },
      { title: 'Google Adsense/Adword/Analytics', logo: '', responsableFirstName: 'HIBO', responsableLastName:'Franck' },
      { title: 'Google Security', logo: '', responsableFirstName: 'ANGUIE', responsableLastName:'Leandre' },
      { title: 'Google Cloud', logo: '', responsableFirstName: 'KOUYA', responsableLastName:'Arnold' },
      { title: 'Women TechMaker', logo: '', responsableFirstName: 'DEZIE', responsableLastName:'Charlette' },
      { title: 'Google Search', logo: '', responsableFirstName: 'KOUYA', responsableLastName:'Arnold' }
    ];

  }

}
