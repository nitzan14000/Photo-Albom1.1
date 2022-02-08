import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPrivateModeComponent } from './exit-private-mode.component';

describe('ExitPrivateModeComponent', () => {
  let component: ExitPrivateModeComponent;
  let fixture: ComponentFixture<ExitPrivateModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitPrivateModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitPrivateModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
