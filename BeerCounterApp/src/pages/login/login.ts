import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { AdminPage } from '../admin/admin';
import { UserPage } from '../user/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ HttpProvider ]
})
export class Login {

  data: any;
  public name: string;
  public password: string;

  constructor(public navCtrl: NavController, public httpProvider: HttpProvider, public alertCtrl: AlertController) {
    
  }

  ionViewWillEnter(){
    this.name = "";
    this.password = "";
  }

  authenticate() {
    this.httpProvider.authenticateUser(this.name, this.password)
      .then(data => {
        if(data){
          this.data = data;
          if(this.data.success){
            if(this.data.user.admin){          
              this.navCtrl.push(AdminPage, {'user': this.data.user});
            }else{
              this.navCtrl.push(UserPage, {'user': this.data.user});
            }
          }else{
            let alert = this.alertCtrl.create({
                subTitle: this.data.message,
                buttons: ['Ok']
            });
            alert.present();
          }
        }else{
          let alert = this.alertCtrl.create({
              subTitle: "Connection failed! Please try again later.",
              buttons: ['Ok']
          });
          alert.present();            
        }
      });
  }
}
