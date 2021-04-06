import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BygenresComponent } from './bygenres.component';

describe('BygenresComponent', () => {
  let component: BygenresComponent;
  let fixture: ComponentFixture<BygenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BygenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BygenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
