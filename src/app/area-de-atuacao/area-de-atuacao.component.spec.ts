import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeAtuacaoComponent } from './area-de-atuacao.component';

describe('AreaDeAtuacaoComponent', () => {
  let component: AreaDeAtuacaoComponent;
  let fixture: ComponentFixture<AreaDeAtuacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDeAtuacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaDeAtuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
