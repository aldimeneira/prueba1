import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaviComponent } from './javi.component';

describe('JaviComponent', () => {
  let component: JaviComponent;
  let fixture: ComponentFixture<JaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JaviComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
