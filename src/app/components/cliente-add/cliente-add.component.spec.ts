import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAddComponent } from './cliente-add.component';
import { ClienteService } from '../../service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../cliente';
import { of } from 'rxjs';

describe('ClienteAddComponent', () => {
  let component: ClienteAddComponent;
  let fixture: ComponentFixture<ClienteAddComponent>;
  let clienteServiceSpy: jasmine.SpyObj<ClienteService>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const clienteServiceSpyObj = jasmine.createSpyObj('ClienteService', ['createClient', 'get']);
    const activatedRouteSpyObj = jasmine.createSpyObj('ActivatedRoute', ['params']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ClienteAddComponent],
      providers: [
        { provide: ClienteService, useValue: clienteServiceSpyObj },
        { provide: ActivatedRoute, useValue: activatedRouteSpyObj },
        { provide: Router, useValue: routerSpyObj },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteAddComponent);
    component = fixture.componentInstance;
    clienteServiceSpy = TestBed.inject(ClienteService) as jasmine.SpyObj<ClienteService>;
    activatedRouteSpy = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should addCliente', () => {
    const mockCliente = new Cliente(1, 'sharedKey', 'nameComplete', 'email', 'phone', 'dateDay');
    spyOnProperty(component, 'id').and.returnValue(1);
    spyOnProperty(component, 'sharedKey').and.returnValue('sharedKey');
    spyOnProperty(component, 'nameComplete').and.returnValue('nameComplete');
    spyOnProperty(component, 'email').and.returnValue('email');
    spyOnProperty(component, 'phone').and.returnValue('phone');
    spyOnProperty(component, 'dateDay').and.returnValue('dateDay');
    clienteServiceSpy.createClient.and.returnValue(of(mockCliente));

    component.addCliente();

    expect(clienteServiceSpy.createClient).toHaveBeenCalledWith(jasmine.objectContaining({
      id: 1,
      sharedKey: 'sharedKey',
      nameComplete: 'nameComplete',
      email: 'email',
      phone: 'phone',
      dateDay: 'dateDay',
    }));
    expect(component.clearForm).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/clientes/inicio']);
  });

  it('should upload', () => {
    const mockParams = { id: '1' };
    const mockCliente = new Cliente(1, 'sharedKey', 'nameComplete', 'email', 'phone', 'dateDay');
    clienteServiceSpy.get.and.returnValue(of(mockCliente));

    component.upload();

    expect(component.id).toBe(1);
    expect(component.nameComplete).toBe('nameComplete');
    expect(component.email).toBe('email');
    expect(component.phone).toBe('phone');
    expect(component.dateDay).toBe('dateDay');
  });

  it('should clearForm', () => {
    component.clearForm();

    expect(component.nameComplete).toBe('');
    expect(component.phone).toBe('');
    expect(component.email).toBe('');
    expect(component.dateDay).toBe('');
  });
});
