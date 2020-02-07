import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTableAtualizarComponent } from './modal-table-atualizar.component';

describe('ModalTableAtualizarComponent', () => {
  let component: ModalTableAtualizarComponent;
  let fixture: ComponentFixture<ModalTableAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTableAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTableAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
