import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from './enviroment'; 

import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  showSplash = true;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    
      timer(5000).subscribe(() => this.showSplash = false)   
    });
  
    
  
  }
}
