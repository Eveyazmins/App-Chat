import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'conexion-usuarios', loadChildren: './conexion-usuarios/conexion-usuarios.module#ConexionUsuariosPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'colores', loadChildren: './colores/colores.module#ColoresPageModule' },
  { path: 'animales', loadChildren: './animales/animales.module#AnimalesPageModule' },
  { path: 'numeros', loadChildren: './numeros/numeros.module#NumerosPageModule' },
  { path: 'chat-a', loadChildren: './chat-a/chat-a.module#ChatAPageModule' },
  { path: 'chat-b', loadChildren: './chat-b/chat-b.module#ChatBPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
