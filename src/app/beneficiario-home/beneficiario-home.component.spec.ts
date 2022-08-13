import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioHomeComponent } from './beneficiario-home.component';

describe('BeneficiarioHomeComponent', () => {
  let component: BeneficiarioHomeComponent;
  let fixture: ComponentFixture<BeneficiarioHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiarioHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiarioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
