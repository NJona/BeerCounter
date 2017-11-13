import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { AdminPage } from '../pages/admin/admin';
import { OverView } from '../pages/admin/tabs/overview/overview';
import { UserList } from '../pages/admin/tabs/userlist/userlist';
import { UserDetails } from '../pages/admin/tabs/userdetail/userdetail';
import { Login } from '../pages/login/login';
import { AddUser } from '../pages/admin/tabs/adduser/adduser';
import { UserPage } from '../pages/user/user';
import { HttpProvider } from '../providers/http/http';

@NgModule({
  declarations: [
    MyApp,
    AdminPage,
    Login,
    UserPage,
    UserDetails,
    AddUser,
    OverView,
    UserList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdminPage,
    Login,
    UserPage,
    UserDetails,
    AddUser,
    OverView,
    UserList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
