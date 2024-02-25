import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListComponent } from './cliente-list.component';
import { ClienteService } from '../../service/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

describe('ClienteListComponent', () => {
  let component: ClienteListComponent;
  let fixture: ComponentFixture<ClienteListComponent>;
  let clienteServiceSpy: jasmine.SpyObj<ClienteService>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const clienteServiceSpyObj = jasmine.createSpyObj('ClienteService', ['exportarCSV', 'getClienteList', 'deleteClient', 'searchCustomer']);
    const snackBarSpyObj = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      declarations: [ClienteListComponent],
      providers: [
        { provide: ClienteService, useValue: clienteServiceSpyObj },
        { provide: MatSnackBar, useValue: snackBarSpyObj },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteListComponent);
    component = fixture.componentInstance;
    clienteServiceSpy = TestBed.inject(ClienteService) as jasmine.SpyObj<ClienteService>;
    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should export CSV', () => {
    const mockData = 'mock CSV data';
    clienteServiceSpy.exportarCSV.and.returnValue(of(mockData));

    component.exportarCSV();

    expect(clienteServiceSpy.exportarCSV).toHaveBeenCalledOnceWith();
    expect(component.clientes).toEqual([]);
  });

  const urlSpy = jasmine.createSpyObj('URL', ['createObjectURL']);

  it('should download CSV file', () => {
    const mockData = 'mock CSV data';
    spyOn(window, 'URL').and.returnValue
    spyOn(document, 'createElement').and.callThrough();
    spyOn(document.body, 'appendChild');
    spyOn(document.body, 'removeChild');

    component.downloadArchivoCSV(mockData);

    expect(document.createElement).toHaveBeenCalledOnceWith('a');
    expect(document.body.appendChild).toHaveBeenCalledOnceWith(jasmine.any(HTMLAnchorElement));
    expect(document.body.removeChild).toHaveBeenCalledOnceWith(jasmine.any(HTMLAnchorElement));
  });
});
