import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrl: './cliente-add.component.css'
})
export class ClienteAddComponent implements OnInit{

  id : string ='';
  sharedKey : string='';
  nombreCompleto : string='';
  email : string='';
  telefono : string='';
  fecha : Date = new Date();
  ngOnInit(): void {
  }

}
