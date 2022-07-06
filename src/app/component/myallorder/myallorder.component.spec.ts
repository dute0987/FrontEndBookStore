import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyallorderComponent } from './myallorder.component';

describe('MyallorderComponent', () => {
  let component: MyallorderComponent;
  let fixture: ComponentFixture<MyallorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyallorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyallorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
