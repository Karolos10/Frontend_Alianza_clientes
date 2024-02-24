import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrl: './cliente-add.component.css'
})
export class ClienteAddComponent implements OnInit {

  id: number = 0;
  sharedKey: string = '';
  nombreCompleto: string = '';
  email: string = '';
  telefono: string = '';
  fecha: Date | string = '';

  constructor(private clienteService: ClienteService) {

  }

  ngOnInit(): void {
  }

  addCliente() {
    let fechaDate: Date | undefined = this.fecha !== '' ? new Date(this.fecha) : undefined;
    if (fechaDate instanceof Date) {
      let cliente = new Cliente(this.id, this.sharedKey, this.nombreCompleto, this.telefono, this.email, fechaDate);
      console.log(cliente);
      this.clienteService.createCliente(cliente).subscribe(res => {
        console.log(res);
      })

    } else {
      console.error('La fecha no es valida');
    };
  }

}
