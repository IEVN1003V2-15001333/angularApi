import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { TemhComponent } from "../temh/temh.component";

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [NavbarComponent, TemhComponent],
  templateUrl: './temp.component.html',
  styles: ``
})
export class TempComponent {
  title="Saludo desde el componente padre"
  mensaje2:string=""
  recibirMensaje(mensaje:string){
    this.mensaje2=mensaje
  }

}
