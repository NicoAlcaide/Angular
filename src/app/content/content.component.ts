// Modificado Nico


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { MatExpansionModule } from '@angular/material/expansion'; // Importa MatExpansionModule
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  imports: [CommonModule, RouterOutlet, FormsModule, MatExpansionModule, MatListModule, MatIconModule, MatCardModule] // Importar RouterOutlet aquí
})
export class ContentComponent {}





 

