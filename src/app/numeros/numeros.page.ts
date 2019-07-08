import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  listaNumeros:boolean;
  opcion: any;
  imgOpcion: any;
  idioma: any;

  constructor() { 
    this.listaNumeros = false;
  }

  ngOnInit() {
    this.opcion = 2;
    this.idioma = 1;
  }

  cambiarIdioma(){
    switch(this.idioma){
      case 1:
        //this.mostrarColores();
        this.idioma = 2;
        
        break;

      case 2:
        //this.mostrarNumeros();
        this.idioma = 3;
        break;

      case 3:
        this.idioma = 1;
        //this.mostrarAnimales();
        break;

    }
  }

  mostrarNumeros(){
    this.listaNumeros=true;
  }

  reproducir(seleccion){
  
    switch(this.opcion){
      case 2://numeros
      
      switch(this.idioma){
          
        case 1:
          //espaniol
          switch(seleccion){
            
            case 'uno':
              var audioAzul = new Audio();
              audioAzul.src = '../../assets/espanol/numeros/uno.mp3';          
              audioAzul.load();            
              audioAzul.play();
              break;

            case 'dos':
              let audioRojo = new Audio();
              audioRojo.src = '../../assets/espanol/numeros/dos.mp3';        
              audioRojo.load();            
              audioRojo.play();
              break; 
            
            case 'tres':
              var audioVerde = new Audio();
              audioVerde.src = '../../assets/espanol/numeros/tres.mp3';        
              audioVerde.load();            
              audioVerde.play();
              break;
            
            case 'cuatro':
              var audioAmarillo = new Audio();
              audioAmarillo.src = '../../assets/espanol/numeros/cuatro.mp3';        
              audioAmarillo.load();            
              audioAmarillo.play();
              break;
            
            case 'cinco':
              var audioVioleta = new Audio();
              audioVioleta.src = '../../assets/espanol/numeros/cinco.mp3';        
              audioVioleta.load();            
              audioVioleta.play();
              break;
          
          }
          break;

        case 2:
          //ingles
          switch(seleccion){
            
            case 'uno':
              var audioAzul = new Audio();
              audioAzul.src = '../../assets/ingles/numeros/uno.mp3';          
              audioAzul.load();            
              audioAzul.play();
              break;

            case 'dos':
              let audioRojo = new Audio();
              audioRojo.src = '../../assets/ingles/numeros/dos.mp3';        
              audioRojo.load();            
              audioRojo.play();
              break; 
            
            case 'tres':
              var audioVerde = new Audio();
              audioVerde.src = '../../assets/ingles/numeros/tres.mp3';        
              audioVerde.load();            
              audioVerde.play();
              break;
            
            case 'cuatro':
              var audioAmarillo = new Audio();
              audioAmarillo.src = '../../assets/ingles/numeros/cuatro.mp3';        
              audioAmarillo.load();            
              audioAmarillo.play();
              break;
            
            case 'cinco':
              var audioVioleta = new Audio();
              audioVioleta.src = '../../assets/ingles/numeros/cinco.mp3';        
              audioVioleta.load();            
              audioVioleta.play();
              break;
          
          }
        
          break;
          
        case 3:
          //aleman
          switch(seleccion){
            
            case 'uno':
              var audioAzul = new Audio();
              audioAzul.src = '../../assets/aleman/numeros/uno.mp3';          
              audioAzul.load();            
              audioAzul.play();
              break;

            case 'dos':
              let audioRojo = new Audio();
              audioRojo.src = '../../assets/aleman/numeros/dos.mp3';        
              audioRojo.load();            
              audioRojo.play();
              break; 
            
            case 'tres':
              var audioVerde = new Audio();
              audioVerde.src = '../../assets/aleman/numeros/tres.mp3';        
              audioVerde.load();            
              audioVerde.play();
              break;
            
            case 'cuatro':
              var audioAmarillo = new Audio();
              audioAmarillo.src = '../../assets/aleman/numeros/cuatro.mp3';        
              audioAmarillo.load();            
              audioAmarillo.play();
              break;
            
            case 'cinco':
              var audioVioleta = new Audio();
              audioVioleta.src = '../../assets/aleman/numeros/cinco.mp3';        
              audioVioleta.load();            
              audioVioleta.play();
              break;
          
          }
          
          break;      
      }
      
      break;

    }

}



}
