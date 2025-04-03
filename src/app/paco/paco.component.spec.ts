import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoComponent } from './paco.component';

describe('PacoComponent', () => {
  let component: PacoComponent;
  let fixture: ComponentFixture<PacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
