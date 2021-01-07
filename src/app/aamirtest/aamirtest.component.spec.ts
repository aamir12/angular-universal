import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AamirtestComponent } from './aamirtest.component';

describe('AamirtestComponent', () => {
  let component: AamirtestComponent;
  let fixture: ComponentFixture<AamirtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AamirtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AamirtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
