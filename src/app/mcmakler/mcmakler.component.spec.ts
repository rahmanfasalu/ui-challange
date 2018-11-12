import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McmaklerComponent } from './mcmakler.component';

describe('McmaklerComponent', () => {
  let component: McmaklerComponent;
  let fixture: ComponentFixture<McmaklerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McmaklerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McmaklerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
