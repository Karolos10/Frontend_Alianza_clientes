import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from '../../service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../cliente';

@Component({
  selector: 'app-cliente-search',
  templateUrl: './cliente-search.component.html',
  styleUrl: './cliente-search.component.css',
  animations: []
})
export class ClienteSearchComponent implements OnInit{

  clientes: Cliente[] = [];

  keyWord: String = '';

  constructor(private clienteService: ClienteService,
    private snackBar: MatSnackBar,
    private activateRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  searchCustomer(){
    this.clienteService.searchCustomer(String(this.keyWord)).subscribe( data => {
      this.clientes = data;
      this.clearForm();
      console.log(data);
    })
  }

  deleteClient(id: number) {
    this.clienteService.deleteClient(id).subscribe(() => {
    });
  }

  clearForm() {
    this.keyWord = '';
  }

}
