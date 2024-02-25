import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../service/cliente.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrl: './cliente-add.component.css'
})
export class ClienteAddComponent implements OnInit {

  id: number = 0;
  sharedKey: string = '';
  nameComplete: string = '';
  email: string = '';
  phone: string = '';
  dateDay: string = '';

  constructor(private clienteService: ClienteService,
    private activateRouter: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.upload();
  }

  addCliente() {
    let cliente = new Cliente(this.id, this.sharedKey, this.nameComplete, this.email, this.phone, this.dateDay);
    this.clienteService.createClient(cliente).subscribe(res => {
      this.clearForm();
      this.router.navigate(['/clientes/inicio'])
    })
  }

  upload(): void {
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if (id) {
        this.clienteService.get(id).subscribe(es => {
          this.id = es.id;
          this.nameComplete = es.nombreCompleto;
          this.email = es.email;
          this.phone = es.telefono;
          this.dateDay = es.fecha
        }
        );
      }
    })
  }

  clearForm() {
    this.nameComplete = '';
    this.phone = '';
    this.email = '';
    this.dateDay = '';
  }

}
