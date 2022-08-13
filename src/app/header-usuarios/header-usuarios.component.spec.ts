import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUsuariosComponent } from './header-usuarios.component';

describe('HeaderUsuariosComponent', () => {
  let component: HeaderUsuariosComponent;
  let fixture: ComponentFixture<HeaderUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
