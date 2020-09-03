import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


interface Token {
  token: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  private tokensCollection: AngularFirestoreCollection<Token>;

  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
    private dataBase: AngularFirestore
  ){
    this.tokensCollection = this.dataBase.collection<Token>('tokens');
  }

  ngOnInit(): void{
    this.updatePwa();
    this.requestPermission();
    this.listenNotifications();
  }

  updatePwa(): void{
    this.swUpdate.available
    .subscribe(value => {
      console.log('undate', value);
      window.location.reload();
    });
  }
  requestPermission(): void{
    this.messaging.requestToken
    .subscribe(token => {
      console.log(token);
      this.tokensCollection.add({token});
    });
  }
  listenNotifications(): void{
    this.messaging.messages
    .subscribe(message => {
      console.log(message);
    });
  }
}
