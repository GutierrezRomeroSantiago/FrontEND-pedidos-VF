import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {
  envio: Array<any> = []
  envx: any

  constructor(private pedidoService:PedidoService) { }

//Función para tomar los datos del formulario pasarlos mediante un POST a la rest API y enviar un correo
  enviarMail(
    _mail: string,
    _contenido: string
  ){
    const doc: any = {
      _mail: _mail,
      _contenido: _contenido,
    }
    console.log(doc)
    this.pedidoService.enviarCorreo(doc).subscribe( a => {
      this.envx = doc;
      this.envio.push(this.envx);
    });
  }


  ngOnInit(): void {
  }

}
