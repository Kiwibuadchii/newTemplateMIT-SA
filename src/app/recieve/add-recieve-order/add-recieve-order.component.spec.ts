import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecieveOrderComponent } from './add-recieve-order.component';

describe('AddRecieveOrderComponent', () => {
  let component: AddRecieveOrderComponent;
  let fixture: ComponentFixture<AddRecieveOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRecieveOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRecieveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
