import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifiersRecallComponent } from './identifiers-recall.component';

describe('IdentifiersRecallComponent', () => {
  let component: IdentifiersRecallComponent;
  let fixture: ComponentFixture<IdentifiersRecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifiersRecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifiersRecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
