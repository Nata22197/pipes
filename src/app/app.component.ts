import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre_apellido = 'Natanael Acosta';
  
  nombre_ = 'Pedro AlfOnso EsTEfano De GreGOrio RoDRigUez';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.232;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  }

  valorDePromesa = new Promise( (resolve, reject)=> {
    setTimeout(() => resolve('Llego la data!'), 3500);
  });

  fecha = new Date();

  video = "mOeSfOJrUIk";
  
  activar:boolean = true;

  password = "EstoEsUnPassword";
}
