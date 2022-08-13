import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCdComponent } from './cadastro-cd.component';

describe('CadastroCdComponent', () => {
  let component: CadastroCdComponent;
  let fixture: ComponentFixture<CadastroCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
