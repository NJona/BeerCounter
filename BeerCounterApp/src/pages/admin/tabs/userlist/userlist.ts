import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HttpProvider } from '../../../../providers/http/http';
import { UserDetails } from '../userdetail/userdetail';
import { AddUser } from '../adduser/adduser';

@Component({
  selector: 'page-userlist',
  templateUrl: 'userlist.html',
  providers: [ HttpProvider ]
})
export class UserList {

    public users: any;
    public activeAdmin:any;

    constructor(public navCtrl: NavController, public httpProvider: HttpProvider, public navParams: NavParams, public alertCtrl:AlertController) {
      this.activeAdmin = navParams.data;
    }

    ionViewWillEnter(){    
      this.loadUsers();
    }

    loadUsers() {
      this.httpProvider.loadUsers()
        .then(users => {
            this.users = users;
        });
    }

    callAddUserPage(){
        this.navCtrl.push(AddUser);
    }

    callUserDetails(user) {
      this.navCtrl.push(UserDetails, {"user": user});
    }
}
