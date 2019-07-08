import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  listaColores:boolean;
  opcion: any;
  imgOpcion: any;
  idioma: any;


  constructor() { 
    this.listaColores = true;
  }

  ngOnInit() {

    this.opcion = 1;
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

  mostrarColores(){
    this.listaColores=true;
  }

  reproducir(seleccion){
  
    switch(this.opcion){
      case 1://colores
        
        switch(this.idioma){
          
          case 1:
            //espaniol
            switch(seleccion){
              
              case 'azul':
                var audioAzul = new Audio();
                audioAzul.src = '../../assets/espanol/colores/azul.mp3';          
                audioAzul.load();            
                audioAzul.play();
                break;

              case 'rojo':
                let audioRojo = new Audio();
                audioRojo.src = '../../assets/espanol/colores/rojo.mp3';        
                audioRojo.load();            
                audioRojo.play();
                break; 
              
              case 'verde':
                var audioVerde = new Audio();
                audioVerde.src = '../../assets/espanol/colores/verde.mp3';        
                audioVerde.load();            
                audioVerde.play();
                break;
              
              case 'amarillo':
                var audioAmarillo = new Audio();
                audioAmarillo.src = '../../assets/espanol/colores/amarillo.mp3';        
                audioAmarillo.load();            
                audioAmarillo.play();
                break;
              
              case 'violeta':
                var audioVioleta = new Audio();
                audioVioleta.src = '../../assets/espanol/colores/violeta.mp3';        
                audioVioleta.load();            
                audioVioleta.play();
                break;
            
            }
            break;

          case 2:
            //ingles
            switch(seleccion){
                
              case 'azul':
                var audioAzul = new Audio();
                audioAzul.src = '../../assets/ingles/colores/azul.mp3';          
                audioAzul.load();            
                audioAzul.play();
                break;

              case 'rojo':
                let audioRojo = new Audio();
                audioRojo.src = '../../assets/ingles/colores/rojo.mp3';        
                audioRojo.load();            
                audioRojo.play();
                break; 
              
              case 'verde':
                var audioVerde = new Audio();
                audioVerde.src = '../../assets/ingles/colores/verde.mp3';        
                audioVerde.load();            
                audioVerde.play();
                break;
              
              case 'amarillo':
                var audioAmarillo = new Audio();
                audioAmarillo.src = '../../assets/ingles/colores/amarillo.mp3';        
                audioAmarillo.load();            
                audioAmarillo.play();
                break;
              
              case 'violeta':
                var audioVioleta = new Audio();
                audioVioleta.src = '../../assets/ingles/colores/violeta.mp3';        
                audioVioleta.load();            
                audioVioleta.play();
                break;
            
            }
            break;

          case 3:
            //aleman
            switch(seleccion){
                
              case 'azul':
                var audioAzul = new Audio();
                audioAzul.src = '../../assets/aleman/colores/azul.mp3';          
                audioAzul.load();            
                audioAzul.play();
                break;

              case 'rojo':
                let audioRojo = new Audio();
                audioRojo.src = '../../assets/aleman/colores/rojo.mp3';        
                audioRojo.load();            
                audioRojo.play();
                break; 
              
              case 'verde':
                var audioVerde = new Audio();
                audioVerde.src = '../../assets/aleman/colores/verde.mp3';        
                audioVerde.load();            
                audioVerde.play();
                break;
              
              case 'amarillo':
                var audioAmarillo = new Audio();
                audioAmarillo.src = '../../assets/aleman/colores/amarillo.mp3';        
                audioAmarillo.load();            
                audioAmarillo.play();
                break;
              
              case 'violeta':
                var audioVioleta = new Audio();
                audioVioleta.src = '../../assets/aleman/colores/violeta.mp3';        
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
