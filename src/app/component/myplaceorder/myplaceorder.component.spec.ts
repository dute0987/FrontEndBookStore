import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplaceorderComponent } from './myplaceorder.component';

describe('MyplaceorderComponent', () => {
  let component: MyplaceorderComponent;
  let fixture: ComponentFixture<MyplaceorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyplaceorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplaceorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
