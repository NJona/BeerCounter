import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [ HttpProvider ]
})
export class UserPage {

  public activeUser: any;
  public available: any;

  constructor(public navCtrl: NavController, public httpProvider: HttpProvider, public navParams: NavParams, public alertCtrl: AlertController) {
    this.activeUser = navParams.get("user");
    this.loadAvailable();
  }

    incrementCounter() {
        let newCounter = this.activeUser.counter + 1;
        this.httpProvider.updateUser(this.activeUser._id, this.activeUser.password, newCounter)
        .then(user => {
            this.activeUser = user;
        });
        let newAvailable = this.available.available - 1;
        this.httpProvider.updateAvailable(this.available._id, newAvailable.toString())
        .then(available => {
            this.available = available;
        });  
    }

    loadAvailable() {
        this.httpProvider.loadAvailable()
        .then(available => {
            this.available = available[0];
        });
    }

    changePassword(){
        let alert = this.alertCtrl.create({
            title: 'Change Password',
            subTitle: 'Change Password from ' + this.activeUser.name + '.',
            inputs: [{
                name:'oldPassword',
                type: 'password',
                placeholder: 'Old Password'
            },
            {
                name:'newPassword',
                type: 'password',
                placeholder: 'New Password'
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
                    if(this.activeUser.password == data.oldPassword){
                        this.httpProvider.updateUser(this.activeUser._id, data.newPassword, this.activeUser.counter)
                        .then(user => {
                            this.activeUser = user;
                        });
                        let alert = this.alertCtrl.create({
                            subTitle: "Password changed!",
                            buttons: ['Ok']
                        });
                        alert.present();
                    }else{
                        let alert = this.alertCtrl.create({
                            subTitle: "Wrong Password! Please try again.",
                            buttons: ['Ok']
                        });
                        alert.present();
                    }
                }
            }]
        });
        alert.present();
    }
}