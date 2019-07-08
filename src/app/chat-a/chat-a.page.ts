import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase';
import { ListaUsuarios } from '../../app/enviroment';


@Component({
  selector: 'app-chat-a',
  templateUrl: './chat-a.page.html',
  styleUrls: ['./chat-a.page.scss'],
})
export class ChatAPage implements OnInit {

  private usuario: any;
  private inputText: string;

  constructor() {
    console.log("entro");
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.traerChats();
  }

  ref = firebase.database().ref('chats_a/');
  chats: {texto: string, usuario: string, hora: string, key: string }[] = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChataPage');
  }

  traerChats(){
    this.ref.on('value', resp => {
      this.chats = ListaUsuarios(resp);
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

}
