import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-temh',
  standalone: true,
  imports: [],
  templateUrl: './temh.component.html',
  styles: ``
})
export class TemhComponent {

  @Input() mensaje:string='' //Propiedad de entrada
  @Output() mensaje2= new EventEmitter<string>();
  enviarMensaje(){
    this.mensaje2.emit('Hola desde el hijo');
  }

}
