import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VoirplusPage } from '../../pages/voirplus/voirplus';

@Component({
  selector: 'page-cellule',
  templateUrl: 'cellule.html'
})
export class CellulePage {

  cellules: Array<{title: string, logo: string, logoDesc: string, responsableFirstName: string, responsableLastName: string, celluleDescript: string }>;

  constructor(public navCtrl: NavController) {

    // liste des cellules
    this.cellules = [
      { title: 'Google Android', logo: 'android.png', logoDesc:'android-nougat.png', responsableFirstName: 'N’ZI', responsableLastName:'Dorgeles', celluleDescript:'Nous sommes une équpe de devellopeurs qui vivent et respirent Android. Notre mission est simple : vous aider à améliorer votre quotidien avec Android. Cela passe par les tests des nouveaux appareils et des dernières applications, pour vous aider à trouver ce dont vous avez besoin aussi comme tout bon developpeur vous apprendre le developpement d\' application qui tourne sous OS Android. Une fois l’appareil acheté ou l’application téléchargée, nous vous aidons à en tirer le meilleur grâce à nos trucs et astuces. Rumeurs sur les prochains appareils les plus innovants, tests complets des derniers smartphones, tablettes et autres appareils Android, recommandations des meilleures applications ou astuces Android, vous trouverez tout sur ici.' },
      { title: 'Google Community Manager', logo: 'cm.png', logoDesc:'cmdesc.jpg', responsableFirstName: 'BENE', responsableLastName:'Paul Roland', celluleDescript:'Les compétences du community manager sont multiples : de la gestion d’informations sur le net (la veille) à la création d’images pour les réseaux sociaux, il déploie ses nombreux atouts. Pour l’accompagner dans son quotidien, le community manager a besoin de nombreux outils, notamment pour effectuer sa veille quotidienne. Parmi les outils les plus couramment utilisés en community management, nous retrouverons ceux proposés par Google, qui souvent mal employés. Google a mis au point ses propres outils de veille, qui sont très performants. Si tu es tout comme moi passionné par le metier de C.M alors n\'hesite pas a integrer ma cellule.'},
      { title: 'Google AngularJs', logo: 'angularjs.png', logoDesc:'angularjscode.png', responsableFirstName: 'MOCHE', responsableLastName:'Isaac Louis', celluleDescript:'AngularJS est né en 2009 dans les locaux de Google. Deux développeurs du nom de Brad Green et Shyam Seshadri commençaient sérieusement à déprimer devant leur projet appelé "Google Feedback". Une immense frustration les envahissait au fur et à mesure que leur code grandissait. Celui-ci comptait approximativement 17 000 lignes à ce moment-là. Autant de lignes de pur front-end  qui sont intestables et donc difficilement maintenables. C\'est à ce moment-là que Shyam Seshadri proposa de redévelopper entièrement la solution avec un framework fait maison. Au bout de trois semaines, l\'application ne comptait plus que 1 500 lignes de codes, parfaitement testées. À compter de ce jour, les autres développeurs de l\'équipe ont décidé de prendre en main ce framework et de travailler avec au quotidien. Une histoire est née, l\'histoire d\'un framework que l\'on nommera AngularJS. Quelques exemples : Je vous invite à consulter cette page : https://builtwith.angularjs.org/. Cette cellule est un complement de la cellule Firebase.' },
      { title: 'Google +', logo: 'google+.png', logoDesc:'google-plus.jpg', responsableFirstName: 'ESSI', responsableLastName:'Thierry', celluleDescript:'Beaucoup d’entre vous ignorent ou négligent encore Google+ (le réseau social créé par Google en 2011) dans leur stratégie médias sociaux. Dommage, car Google+ est en train de prendre ses marques et de devenir un atout non négligeable pour la visibilité des professionnels sur la toile ! Google+ est un vrai atout pour votre référencement. 90% des internautes utilisent Google comme moteur de recherche… on se dit que négliger un moyen d’améliorer gratuitement son référencement, c’est un peu dommage. 1) Google indexe très rapidement les contenus publiés sur Google+ 2) Google tient également compte des recommandations (bouton +1) des utilisateurs de Google+ pour définir la qualité du référencement de vos contenus. Google donne désormais une prime « autorship » au référencement de votre site ou blog d’entreprise.' },
      { title: 'Google Blogger', logo: 'googleblogger.png', logoDesc:'plusblogger.png', responsableFirstName: 'DEZIE', responsableLastName:'Charlette', celluleDescript:'Blogger est la plateforme de création de Blog mise à disposition par Google. Ce qui vous permet de créer facilement et efficacement votre propre Blog avec toute la technologie Google. Pour créer son blog de façon pertinente et efficace, il faut bien connaître la structure et les fonctionnalités avancées du support utilisé. La cellule aborde chacune des nombreuses fonctionnalités de Blogger pour vous permettre d’optimiser la qualité des contenus et de leur présentation : rédaction et intégration d’articles, d’images…. Grâce à la formation EXPERT is Me de création de Blog avec Blogger, vous serez capable d’administrer, de modifier et d’animer les contenus (articles, images, vidéos…), d’optimiser son référencement et d’animer votre communauté via votre blog, votre compte et votre page Google +.' },
      { title: 'Google Map', logo: 'googlemaps.png', logoDesc:'google-map.PNG', responsableFirstName: 'ANGORA', responsableLastName:'Yao Magloire', celluleDescript:'Des millions de sites Web et d\'applications utilisent Google Maps API pour offrir à leurs utilisateurs une expérience de localisation inégalée. Les Google Maps API sont disponibles pour Android, iOS, les navigateurs Web et via les services Web HTTP. Apprenez à créer un site Web géolocalisé, à utiliser nos services Web et à superviser votre projet de développeur. Si vous venez de démarrer, ou souhaitez une présentation rapide et ludique des fonctionnalités de Google Maps API, vous etes aussi les bienvenues. Découvrez comment les développeurs utilisent les Google Maps API pour concevoir de nouvelles expériences de localisation. Les API Google Maps sont gratuites pour un large éventail de cas d\'utilisation, avec un tarif moyen et des limites d\'utilisation prévisibles, ainsi que des contrats annuels pour les déploiements d\'entreprise.' },
      { title: 'Google WebMasterTools', logo: 'webmastertools.png', logoDesc:'google_Webmaster_Tool.png', responsableFirstName: 'KOUYA', responsableLastName:'Arnold', celluleDescript:'Suivez les performances de votre site dans les résultats de recherche avec Google Search Console et ensemble vous permettre obtenir d\'autres ressources destinées aux webmasters. Comprenez le fonctionnement de la recherche Google, Découvrez comment Google explore, indexe et affiche votre site. Et bien sur accédez à des ressources avancées pour les développeurs. Comprenez les avantages et les inconvénients liés à l\'embauche d\'un SEO (référenceur) et les questions spécifiques à poser aux entreprises potentielles. Apprenez ce qu\'est le SEO, améliorez la structure de votre site, optimisez son contenu, gérez les robots d\'exploration, faites la promotion de votre contenu et analysez le trafic de votre site.' },
      { title: 'Google Firebase', logo: 'firebase.png', logoDesc:'firebasefunction.png', responsableFirstName: 'ANGORA', responsableLastName:'Yao Magloire', celluleDescript:'Firebase, qu’est-ce que c’est ? En quelques mots, c’est une plateforme dédiée aux développeurs mobiles. Quand on évoque une plateforme, c’est un ensemble d’outils à destination des développeurs. Après avoir utilisé le kit de développement (SDK), les développeurs peuvent s’adosser aux infrastructures de Google pour collecter des statistiques sur les apps, mais aussi gérer l’envoi des notifications aux serveurs Google. C’est ce que l’on appelait précédemment Google Cloud Messaging, qui portera désormais le nom de Firebase Cloud Messaging (FCM). Disponible pour iOS, Android et le Web, FCM a été conçu pour envoyer 170 milliards de notifications par jour. Nous utiliserons AngularJS et Firebase pour créer une simple application web ou mobile depuis le début.' },
      { title: 'Google Youtube', logo: 'youtube.png', logoDesc:'youtube-mode.png', responsableFirstName: 'KOUAKOU', responsableLastName:'Bénédicte', celluleDescript:'Avec plus de 3 milliards de vue chaque jour, YouTube s’est peu à peu transformé. Loin le temps où le site n’était qu’une plateforme vidéo, le site est aujourd’hui un véritable moteur de recherche et s’apparente même à un réseau social. En effet, le site dispose d’une communauté d’utilisateurs très active qui joue un rôle essentiel dans la viralisation des vidéos. Chaque minute, 400h de vidéos sont uploadées sur Youtube ! Chaque jour, ~600 000 heures de vidéos sont uploadées sur YouTube. Chaque JOUR, les utilisateurs de Youtube passent + d\'1 milliard d\'heures à regarder des vidéos ! Chaque jour, les utilisateurs de Youtube totalisent 115.000 années passées à regarder des vidéos.' },
      { title: 'Google Analytics', logo: 'googleanalytics.png', logoDesc:'googleanalyticsdash.png', responsableFirstName: 'HIBO', responsableLastName:'Franck', celluleDescript:'Ne vous contentez plus d\'analyser le dernier clic. Découvrez comment vos canaux marketing interagissent entre eux pour générer des ventes et des conversions. L\'analyse de vos sites, applications et annonces pour mobile et de la façon dont ils vous permettent d\'attirer des clients potentiels revêt chaque jour plus d\'importance. Google Analytics vous permet d\'évaluer les performances de vos sites Web et applications pour mobile, et d\'analyser les visites issues des mobiles dotés d\'un navigateur Internet (qu\'il s\'agisse de smartphones, de mobiles standards ou de tablettes). Google fournit des données détaillées aux responsables marketing afin qu\'ils puissent proposer des annonces pertinentes à leurs clients, être toujours là au bon moment et, par là même, être efficaces sur tous les écrans et appareils. Préparez-vous à créer des campagnes marketing ciblées et efficaces, qui touchent vos visiteurs où qu\'ils se trouvent.' },
      { title: 'Google Security', logo: 'googlesecurity.png', logoDesc:'google-security-checkup.png', responsableFirstName: 'ANGUIE', responsableLastName:'Leandre', celluleDescript:'Tous les comptes Google intègrent les fonctionnalités de sécurité les plus évoluées du moment. Que vous ayez égaré votre appareil ou qu\'il vous ait été dérobé, une procédure rapide peut vous aider à sécuriser ce téléphone ou cette tablette. Protégez votre compte en quelques minutes en vérifiant vos paramètres de sécurité et les activités associées. Découvrez les outils de sécurité que Google met à votre disposition pour vous aider à gérer la sécurité et la confidentialité de vos données personnelles. Utilisez des outils simples et découvrez comment profiter en toute sécurité de Gmail, Chrome, YouTube et autres produits Google. Aidez vos enfants à prendre de bonnes habitudes en matière de sécurité sur le Web avec les outils Google et les conseils de nos partenaires.' },
      { title: 'Google Cloud', logo: 'googlecloudplateform.png', logoDesc:'Google-cloud-plateforme.png', responsableFirstName: 'KOUYA', responsableLastName:'Arnold', celluleDescript:'Google Cloud Platform vous permet de développer, de déployer, d\'ajuster et de gérer vos applications, sites Web et services sur la même infrastructure que celle qui est utilisée par Google. Déployez vos applications et stockez vos données sur une infrastructure protégée par plus de 500 experts en sécurité. Google Cloud Platform possède les meilleures certifications telles que ISO 27001, SOC 2/3, and PCI DSS 3.0. Les applications hébergée sur Cloud Platform s’adaptent automatiquement aux variations de charge, que ce soit à la hausse ou à la baisse. Vous ne payez que les ressources que vous utilisez. Chaque milliseconde de latence compte. Ces 16 dernières années, Google a mis en place l\'infrastructure de Cloud Computing la plus rapide, la plus puissante et la plus performante au monde.' },
      { title: 'Women TechMaker', logo: 'womentechmakers.png', logoDesc:'women-techmakers.jpg', responsableFirstName: 'Charlette D.', responsableLastName:'Benedicte K. / ', celluleDescript:'Women Techmakers (WTM) est une marque et un programme de Google pour les femmes dans la technologie. WTM offre visibilité, la communauté et les ressources pour les femmes dans la technologie pour stimuler l\'innovation et la participation dans le domaine. Les événements WTM sont conçus pour promouvoir un environnement de l\'inclusion des femmes dans la technologie, ainsi que célébrer les femmes leader de l\'industrie. Nous voulons faire progresser, grandir, et célébrer les femmes développeurs, concepteurs et entrepreneurs en technologie. ' },
      { title: 'Google Search', logo: 'googlesearch.gif', logoDesc:'google-image-search-filters.png', responsableFirstName: 'KOUYA', responsableLastName:'Arnold', celluleDescript:'Utilisez Search Console pour contrôler les données relatives aux résultats de recherche Google pour vos sites Web. C’est l’une des premières choses que vous devez faire après avoir mis en ligne votre site et ouvert votre compte Google Analytics : créer un profil sur Google Search Console. Vous connaissez peut-être déjà cet outil, puisqu’il s’agit de la nouvelle version de ce que l’on appelait jusque-là Google Webmaster Tools. Pour prendre en compte l’évolution de son audience vers d’autres profils que les « webmasters », Google a décidé de le renommer et de transformer l’outil, qui existe depuis près de 10 ans. Les nouvelles fonctionnalités et la variété des rapports disponibles sont précieux pour optimiser votre site Internet. Qu’y trouvez-vous et surtout, comment exploiter pleinement Google Search Console pour améliorer votre présence en ligne ? c\'est dans cette cellule.' }
    ];

  }

  voirplus(cellule) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(VoirplusPage, {
      cellule: cellule
    });
  }

}
