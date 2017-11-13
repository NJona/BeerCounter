import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { HttpProvider } from '../../../../providers/http/http';

@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
  providers: [ HttpProvider ]
})
export class AddUser {

  public data:any;
  public userCreated: any;
  public name: string;
  public password: string;
  public isAdmin = false;

  constructor(public navCtrl: NavController, public httpProvider: HttpProvider, public alertCtrl: AlertController) {
    
  }

  addUser() {
    this.httpProvider.checkIfUserExist(this.name)
        .then(data => {
            this.data = data;
            if(!this.data.success){
                let alert = this.alertCtrl.create({
                    subTitle: "User " + this.name + " already exist! Please try another name.",
                    buttons: ['Ok']
                });
                alert.present();        
            }else{
                let isAdmin = this.isAdmin ? "true" : "false";
                this.httpProvider.createUser(this.name, this.password, isAdmin)
                .then(user => {
                    this.userCreated = user;
                        let alert = this.alertCtrl.create({
                            subTitle: "User " + this.userCreated.name + " successfully created!",
                            buttons: ['Ok']
                        });
                        alert.present();
                        this.navCtrl.pop();
                });
            }
        });
  }

  cancel(){
      this.navCtrl.pop();
  }
}
