import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private api : string = 'http://localhost:8080/api/clientes'

  constructor(private http : HttpClient) { }

  getClienteList():Observable<Cliente []>{

    return this.http.get<Cliente []>(this.api);

  }

  createCliente(Cliente : Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.api, Cliente);
  }

  deleteCliente(id: number):Observable<any>{
    return this.http.delete(this.api+'/'+id);
  }
}
