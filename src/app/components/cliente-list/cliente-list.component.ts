import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../service/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
  animations: [
    // ... verifica si hay algo relacionado con @state.done y retíralo si es necesario
  ]
})
export class ClienteListComponent implements OnInit{

  clientes : Cliente [] = [];

  constructor(private clienteService : ClienteService, private snackBar : MatSnackBar){}

  ngOnInit(): void {
    this.listClientes();
  }

  listClientes(){
    this.clienteService.getClienteList().subscribe( data => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  deleteCliente(id : number){
    this.clienteService.deleteCliente(id).subscribe( () => {
      this.listClientes();
      this.openSnackBar("Record successfully deleted", 'cerrar');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Puedes ajustar la duración del mensaje según tus preferencias
    });
  }

}
