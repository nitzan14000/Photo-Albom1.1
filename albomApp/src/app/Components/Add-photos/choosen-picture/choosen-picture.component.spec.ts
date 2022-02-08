import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosenPictureComponent } from './choosen-picture.component';

describe('ChoosenPictureComponent', () => {
  let component: ChoosenPictureComponent;
  let fixture: ComponentFixture<ChoosenPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosenPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosenPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
