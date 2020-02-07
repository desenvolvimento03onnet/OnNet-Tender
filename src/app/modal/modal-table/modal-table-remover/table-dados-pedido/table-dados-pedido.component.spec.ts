import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDadosPedidoComponent } from './table-dados-pedido.component';

describe('TableDadosPedidoComponent', () => {
  let component: TableDadosPedidoComponent;
  let fixture: ComponentFixture<TableDadosPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDadosPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDadosPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
