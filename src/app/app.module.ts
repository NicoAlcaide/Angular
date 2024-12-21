// Modificado Nico

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { MatExpansionModule } from '@angular/material/expansion'; /* utilizado en las FAQs  */
import { MatListModule } from '@angular/material/list';  /* utilizado en content  */
import { MatIconModule } from '@angular/material/icon';  /* utilizado en content  */
import { MatCardModule } from '@angular/material/card';  /* utilizado en content  */

import { MatToolbarModule } from '@angular/material/toolbar'; /* utilizado en el header y footer  */


@NgModule({
	
  imports: [
   	BrowserModule,
    FormsModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	MatExpansionModule,	
    AppComponent,
	SidebarComponent,
	MatListModule, 
	MatIconModule,
	MatCardModule
	// Importar como componente autónomo
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }




