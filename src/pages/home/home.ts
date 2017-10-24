import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
  ) {

  }

  openModal(): void {
    const modal = this.modalCtrl.create(AboutPage);
    modal.present();
  }
}
