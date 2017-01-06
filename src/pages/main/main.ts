import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilteringPage } from '../filtering/filtering';

/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  filteringPage = FilteringPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello MainPage Page');
  }
}
