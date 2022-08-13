import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoAgendamentoComponent } from './confirmacao-agendamento.component';

describe('ConfirmacaoAgendamentoComponent', () => {
  let component: ConfirmacaoAgendamentoComponent;
  let fixture: ComponentFixture<ConfirmacaoAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacaoAgendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
