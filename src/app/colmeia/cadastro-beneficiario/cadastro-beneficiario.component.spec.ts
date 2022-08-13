import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBeneficiarioComponent } from './cadastro-beneficiario.component';

describe('CadastroBeneficiarioComponent', () => {
  let component: CadastroBeneficiarioComponent;
  let fixture: ComponentFixture<CadastroBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
