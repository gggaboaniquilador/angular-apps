import { Component } from '@angular/core';

@Component({
  selector: 'app-swithches',
  templateUrl: './swithches.component.html',
  styles: [
  ]
})
export class SwithchesComponent {

  persona = {
    genero: 'F',
    notificaciones: true,
  }
  terminosYCondiciones: boolean = false;

}
