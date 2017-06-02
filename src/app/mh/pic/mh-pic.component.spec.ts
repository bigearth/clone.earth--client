import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhPicComponent } from './mh-pic.component';

describe('MhPicComponent', () => {
  let component: MhPicComponent;
  let fixture: ComponentFixture<MhPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
