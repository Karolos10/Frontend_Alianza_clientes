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
  fecha: string = '';

  constructor(private clienteService: ClienteService) {

  }

  ngOnInit(): void {
  }

  addCliente() {
    //let fechaDate: Date | undefined = this.fecha !== '' ? new Date(this.fecha) : undefined;
    let cliente = new Cliente(this.id, this.sharedKey, this.nombreCompleto, this.telefono, this.email, this.fecha);
      console.log(cliente);
      this.clienteService.createCliente(cliente).subscribe(res => {
        console.log(res);
        this.clearForm();
      })
  }

  clearForm(){
    this.nombreCompleto ='';
    this.telefono='';
    this.email='';
    this.fecha='';
  }

}
