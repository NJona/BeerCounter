import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HttpProvider } from '../../../../providers/http/http';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
  providers: [ HttpProvider ]
})
export class OverView {

    public activeAdmin: any;
    public available: any;

    constructor(public navCtrl: NavController, public httpProvider: HttpProvider, public navParams: NavParams, public alertCtrl:AlertController) {
        this.activeAdmin = navParams.data;
    }

    ionViewWillEnter(){
        this.loadAvailable();
    }

    loadAvailable() {
        this.httpProvider.loadAvailable()
        .then(available => {
            this.available = available[0];
        });
    }

     incrementCounter() {
        let newCounter = this.activeAdmin.counter + 1;
        this.httpProvider.updateUser(this.activeAdmin._id, this.activeAdmin.password, newCounter)
        .then(admin => {
            this.activeAdmin = admin;
        });
        let newAvailable = this.available.available - 1;
        this.httpProvider.updateAvailable(this.available._id, newAvailable.toString())
        .then(available => {
            this.available = available;
        });        
    }

    setCounter(){
        let alert = this.alertCtrl.create({
            title: 'Set Counter',
            subTitle: 'Set Counter from ' + this.activeAdmin.name + ' manually.',
            inputs: [{
                name:'counterValue',
                value: this.activeAdmin.counter
            }],
            buttons: [
            {
                text:'Cancel',
                handler: data => {
                    console.log("Canceled");
                }
            },
            {
                text:'Ok',
                handler: data => {
                    this.httpProvider.updateUser(this.activeAdmin._id, this.activeAdmin.password, data.counterValue)
                    .then(user => {
                        this.activeAdmin = user;
                    });
                }
            }]
        });
        alert.present();
    }

    resetCounter(){
        this.httpProvider.updateUser(this.activeAdmin._id, this.activeAdmin.password, '0')
        .then(admin => {
            this.activeAdmin = admin;
        });
    }

    setAvailable(){
        let alert = this.alertCtrl.create({
            title: 'Set Available',
            inputs: [{
                name:'availableValue',
                value: this.available.available
            }],
            buttons: [
            {
                text:'Cancel',
                handler: data => {
                    console.log("Canceled");
                }
            },
            {
                text:'Ok',
                handler: data => {
                    this.httpProvider.updateAvailable(this.available._id, data.availableValue)
                    .then(available => {
                        this.available = available;
                    });
                }
            }]
        });
        alert.present();      
    }
}
