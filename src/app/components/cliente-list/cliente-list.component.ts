import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../service/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-cliente-list',
  template: '<button (click)="exportarCSV()">Exportar a CSV</button>',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
  animations: []
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = [];

  keyWord: String = '';

  constructor(private clienteService: ClienteService,
    private snackBar: MatSnackBar,
    private activateRouter: ActivatedRoute,
    private router: Router) { }

  exportarCSV(): void {
    this.clienteService.exportarCSV().subscribe(
      (data) => {
        this.downloadArchivoCSV(data);
      },
      (error) => {
        console.error('Error al exportar a CSV', error);
      }
    );
  }

  downloadArchivoCSV(data: any): void {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'clients.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  ngOnInit(): void {
    this.listClientes();
  }

  listClientes() {
    this.clienteService.getClienteList().subscribe(data => {
      this.clientes = data;
    });
  }

  deleteClient(id: number) {
    this.clienteService.deleteClient(id).subscribe(() => {
      this.listClientes();
      this.openSnackBar("Record successfully deleted", 'cerrar');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  searchCustomer(){
    this.clienteService.searchCustomer(String(this.keyWord)).subscribe( data => {
      this.clientes = data;
      this.clearForm();
      console.log(data);
    })
  }

  clearForm() {
    this.keyWord = '';
  }

}
