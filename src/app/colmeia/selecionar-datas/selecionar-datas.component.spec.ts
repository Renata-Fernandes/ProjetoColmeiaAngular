import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarDatasComponent } from './selecionar-datas.component';

describe('SelecionarDatasComponent', () => {
  let component: SelecionarDatasComponent;
  let fixture: ComponentFixture<SelecionarDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarDatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
