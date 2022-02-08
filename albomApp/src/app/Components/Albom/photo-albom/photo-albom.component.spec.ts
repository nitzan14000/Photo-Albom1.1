import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbomComponent } from './photo-albom.component';

describe('PhotoAlbomComponent', () => {
  let component: PhotoAlbomComponent;
  let fixture: ComponentFixture<PhotoAlbomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoAlbomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
