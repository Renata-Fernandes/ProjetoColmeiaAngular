import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreComponent } from './cadastre.component';

describe('CadastreComponent', () => {
  let component: CadastreComponent;
  let fixture: ComponentFixture<CadastreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
