import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTableAdicionarComponent } from './modal-table-adicionar.component';

describe('ModalTableAdicionarComponent', () => {
  let component: ModalTableAdicionarComponent;
  let fixture: ComponentFixture<ModalTableAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTableAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTableAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
