import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HttpProvider } from '../../../../providers/http/http';

@Component({
  selector: 'page-userDetails',
  templateUrl: 'userdetail.html',
  providers: [ HttpProvider ]
})
export class UserDetails {

    public user: any;
    public deleteMessage: any;

    constructor(public navCtrl: NavController, public httpProvider: HttpProvider, public navParams: NavParams, public alertCtrl: AlertController) {
        this.user = navParams.get("user");
    }

    resetCounter(){
            this.httpProvider.updateUser(this.user._id, this.user.password, '0')
            .then(user => {
                this.user = user;
            });
    }

    setCounter(){
            let alert = this.alertCtrl.create({
                title: 'Set Counter',
                subTitle: 'Set Counter from ' + this.user.name + ' manually.',
                inputs: [{
                    name:'counterValue',
                    value: this.user.counter
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
                        this.httpProvider.updateUser(this.user._id, this.user.password, data.counterValue)
                        .then(user => {
                            this.user = user;
                        });
                    }
                }]
            });
            alert.present();
    }

    deleteUser(){
        this.httpProvider.deleteUser(this.user._id)
        .then(message => {
            this.deleteMessage = message;
            let alert = this.alertCtrl.create({
                subTitle: this.deleteMessage.message,
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.pop();
        });
    }

    cancel(){
        this.navCtrl.pop();
    }
}