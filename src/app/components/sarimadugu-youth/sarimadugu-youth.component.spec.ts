import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarimaduguYouthComponent } from './sarimadugu-youth.component';

describe('SarimaduguYouthComponent', () => {
  let component: SarimaduguYouthComponent;
  let fixture: ComponentFixture<SarimaduguYouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarimaduguYouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarimaduguYouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
