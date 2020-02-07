import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTableRemoverComponent } from './modal-table-remover.component';

describe('ModalTableRemoverComponent', () => {
  let component: ModalTableRemoverComponent;
  let fixture: ComponentFixture<ModalTableRemoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTableRemoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTableRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
