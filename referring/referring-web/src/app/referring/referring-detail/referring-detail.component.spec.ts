import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferringDetailComponent } from './referring-detail.component';

describe('ReferringDetailComponent', () => {
  let component: ReferringDetailComponent;
  let fixture: ComponentFixture<ReferringDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferringDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferringDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
