import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; /* utilizado en el header y footer  */


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
