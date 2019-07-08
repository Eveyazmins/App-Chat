import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase';
import { ListaUsuarios } from '../../app/enviroment';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-chat-b',
  templateUrl: './chat-b.page.html',
  styleUrls: ['./chat-b.page.scss'],
})
export class ChatBPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  private usuario: any;
  private inputText: string;

  
  constructor() {
    console.log("entro");
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.traerChats();
  }

  ref = firebase.database().ref('chats_b/');
  chats: {texto: string, usuario: string, hora: string, key: string }[] = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChataPage');
  }

  traerChats(){
    this.ref.on('value', resp => {
      this.chats = ListaUsuarios(resp);
      
      setTimeout(() => {
        this.updateScroll();
    }, 500);
    });

  }

  doSend(){
    let newChat = this.ref.push();
    let hora_fecha = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
    newChat.set({texto: this.inputText, usuario: this.usuario.correo, hora: hora_fecha});
    this.inputText = "";
  }

  ngOnInit() {

  }

  updateScroll() {
    if (this.content.scrollToBottom) {
      this.content.scrollToBottom(400);
    }
}

}
