import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  listaAnimales:boolean;
  opcion: any;
  imgOpcion: any;
  idioma: any;

  constructor() { 
    this.listaAnimales = true;
  }

  ngOnInit() {
    this.opcion = 3;
    this.idioma = 1;
  }

  cambiarIdioma(){
    switch(this.idioma){
      case 1:
        this.idioma = 2;
        
        break;

      case 2:
        this.idioma = 3;
        break;

      case 3:
        this.idioma = 1;
        break;
    }
  }

  mostrarAnimales(){
    this.listaAnimales=true;
  }

  reproducir(seleccion){
    switch(this.opcion){
      case 3://colores
        
      switch(this.idioma){
      
      case 1:
        //espaniol
        switch(seleccion){
          
          case 'vaca':
            var audioAzul = new Audio();
            audioAzul.src = '../../assets/espanol/animales/vaca.mp3';          
            audioAzul.load();            
            audioAzul.play();
            break;

          case 'gallo':
            let audioRojo = new Audio();
            audioRojo.src = '../../assets/espanol/animales/gallo.mp3';        
            audioRojo.load();            
            audioRojo.play();
            break; 
          
          case 'caballo':
            var audioVerde = new Audio();
            audioVerde.src = '../../assets/espanol/animales/caballo.mp3';        
            audioVerde.load();            
            audioVerde.play();
            break;
          
          case 'oveja':
            var audioAmarillo = new Audio();
            audioAmarillo.src = '../../assets/espanol/animales/oveja.mp3';        
            audioAmarillo.load();            
            audioAmarillo.play();
            break;
          
          case 'pato':
            var audioVioleta = new Audio();
            audioVioleta.src = '../../assets/espanol/animales/pato.mp3';        
            audioVioleta.load();            
            audioVioleta.play();
            break;
        
        }
        break;

      case 2:
        //ingles
        switch(seleccion){
          case 'vaca':
            var audioAzul = new Audio();
            audioAzul.src = '../../assets/ingles/animales/vaca.mp3';          
            audioAzul.load();            
            audioAzul.play();
            break;

          case 'gallo':
            let audioRojo = new Audio();
            audioRojo.src = '../../assets/ingles/animales/gallo.mp3';        
            audioRojo.load();            
            audioRojo.play();
            break; 
          
          case 'caballo':
            var audioVerde = new Audio();
            audioVerde.src = '../../assets/ingles/animales/caballo.mp3';        
            audioVerde.load();            
            audioVerde.play();
            break;
          
          case 'oveja':
            var audioAmarillo = new Audio();
            audioAmarillo.src = '../../assets/ingles/animales/oveja.mp3';        
            audioAmarillo.load();            
            audioAmarillo.play();
            break;
          
          case 'pato':
            var audioVioleta = new Audio();
            audioVioleta.src = '../../assets/ingles/animales/pato.mp3';        
            audioVioleta.load();            
            audioVioleta.play();
            break;
        
        }
      
        break;
        
      case 3:
        //aleman
        switch(seleccion){
          case 'vaca':
            var audioAzul = new Audio();
            audioAzul.src = '../../assets/aleman/animales/vaca.mp3';          
            audioAzul.load();            
            audioAzul.play();
            break;

          case 'gallo':
            let audioRojo = new Audio();
            audioRojo.src = '../../assets/aleman/animales/gallo.mp3';        
            audioRojo.load();            
            audioRojo.play();
            break; 
          
          case 'caballo':
            var audioVerde = new Audio();
            audioVerde.src = '../../assets/aleman/animales/caballo.mp3';        
            audioVerde.load();            
            audioVerde.play();
            break;
          
          case 'oveja':
            var audioAmarillo = new Audio();
            audioAmarillo.src = '../../assets/aleman/animales/oveja.mp3';        
            audioAmarillo.load();            
            audioAmarillo.play();
            break;
          
          case 'pato':
            var audioVioleta = new Audio();
            audioVioleta.src = '../../assets/aleman/animales/pato.mp3';        
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
