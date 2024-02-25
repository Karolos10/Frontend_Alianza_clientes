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

  get(id : number):Observable<Cliente []>{
    return this.http.get<Cliente []>(this.api+'/'+id);
  }

  createClient(Cliente : Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.api, Cliente);
  }

  update(cliente : Cliente):Observable<Cliente []>{
    return this.http.put<Cliente []>(this.api, cliente);
  }

  deleteClient(id: number):Observable<any>{
    return this.http.delete(this.api+'/'+id);
  }
}
