import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OverView } from './tabs/overview/overview';
import { UserList } from './tabs/userlist/userlist';

@Component({
  selector: 'page-TabAdmin',
  templateUrl: 'admin.html'
})

export class AdminPage {
    tab1: any;
    tab2: any;

    user:any;
    isEnabled = false;

    constructor(public navCtrl: NavController, public navParams: NavParams){
        this.user = navParams.get("user");
        this.tab1 = OverView;
        this.tab2 = UserList;
    }
    logout(){
        this.navCtrl.pop();
    }
}