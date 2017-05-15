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
      { title: 'Google Android', logo: 'android.png', responsableFirstName: 'N’ZI', responsableLastName:'Dorgeles' },
      { title: 'Google +', logo: 'google+.png', responsableFirstName: 'ESSI', responsableLastName:'Thierry' },
      { title: 'Google Blogger', logo: 'googleblogger.png', responsableFirstName: 'DEZIE', responsableLastName:'Charlette' },
      { title: 'Google Map', logo: 'googlemaps.png', responsableFirstName: 'ANGORA', responsableLastName:'Yao Magloire' },
      { title: 'Google WebMasterTools', logo: 'webmastertools.png', responsableFirstName: 'KOUYA', responsableLastName:'Arnold' },
      { title: 'Google Firebase', logo: 'firebase.png', responsableFirstName: 'ANGORA', responsableLastName:'Yao Magloire' },
      { title: 'Google Youtube', logo: 'youtube.png', responsableFirstName: 'KOUAKOU', responsableLastName:'Bénédicte' },
      { title: 'Google Analytics', logo: 'googleanalytics.png', responsableFirstName: 'HIBO', responsableLastName:'Franck' },
      { title: 'Google Security', logo: 'googlesecurity.png', responsableFirstName: 'ANGUIE', responsableLastName:'Leandre' },
      { title: 'Google Cloud', logo: 'googlecloudplateform.png', responsableFirstName: 'KOUYA', responsableLastName:'Arnold' },
      { title: 'Women TechMaker', logo: 'womentechmakers.png', responsableFirstName: 'Charlette D.', responsableLastName:'Benedicte K. / ' },
      { title: 'Google Search', logo: 'googlesearch.gif', responsableFirstName: 'KOUYA', responsableLastName:'Arnold' },
      { title: 'Google AngularJs', logo: 'angularjs.png', responsableFirstName: 'ANGORA', responsableLastName:'Yao Magloire' }
    ];

  }

}
