import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; /* utilizado en el header y footer  */


@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
