import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ListadoComponent } from './listado/listado.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [ 
  {path: 'add-curso', component: CrearComponent}, 
  {path: 'cursos', component: ListadoComponent}
 ]; 

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ListadoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
  
}
