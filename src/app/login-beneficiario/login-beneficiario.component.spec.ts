import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBeneficiarioComponent } from './login-beneficiario.component';

describe('LoginBeneficiarioComponent', () => {
  let component: LoginBeneficiarioComponent;
  let fixture: ComponentFixture<LoginBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
