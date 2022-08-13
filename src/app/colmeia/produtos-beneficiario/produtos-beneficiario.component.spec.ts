import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosBeneficiarioComponent } from './produtos-beneficiario.component';

describe('ProdutosBeneficiarioComponent', () => {
  let component: ProdutosBeneficiarioComponent;
  let fixture: ComponentFixture<ProdutosBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
