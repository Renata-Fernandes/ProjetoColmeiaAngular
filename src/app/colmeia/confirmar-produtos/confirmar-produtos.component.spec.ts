import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarProdutosComponent } from './confirmar-produtos.component';

describe('ConfirmarProdutosComponent', () => {
  let component: ConfirmarProdutosComponent;
  let fixture: ComponentFixture<ConfirmarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
