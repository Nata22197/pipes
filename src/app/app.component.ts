import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre_apellido = 'Natanael Acosta';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.232;

  salario = 1234.5;
}
