import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColmeiaComponent } from './colmeia.component';

describe('ColmeiaComponent', () => {
  let component: ColmeiaComponent;
  let fixture: ComponentFixture<ColmeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColmeiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColmeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
