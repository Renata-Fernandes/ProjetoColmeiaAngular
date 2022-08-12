import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDoadorComponent } from './login-doador.component';

describe('LoginDoadorComponent', () => {
  let component: LoginDoadorComponent;
  let fixture: ComponentFixture<LoginDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDoadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
