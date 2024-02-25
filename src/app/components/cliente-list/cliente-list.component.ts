import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../service/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';



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

  constructor(private clienteService : ClienteService, private snackBar : MatSnackBar, private activateRouter : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    //this.upload();
    this.listClientes();
    //this.upload();
  }

  upload():void{
    this.activateRouter.params.subscribe( e => {
      let id = e['id'];
      if(id){
        this.clienteService.get(id).subscribe(es=>this.clientes=es
        );
      }
    })
  }

 /* update():void{
    this.clienteService.update().subscribe{
      res => {
        this.router.navigate(['/clientes/inicio'])
      }
    }
  }  */

  listClientes(){
    this.clienteService.getClienteList().subscribe( data => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  deleteClient(id : number){
    this.clienteService.deleteClient(id).subscribe( () => {
      this.listClientes();
      this.openSnackBar("Record successfully deleted", 'cerrar');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
