import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarCategoriaComponent } from './modal-editar-categoria.component';

describe('ModalEditarCategoriaComponent', () => {
  let component: ModalEditarCategoriaComponent;
  let fixture: ComponentFixture<ModalEditarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
