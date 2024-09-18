import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRecieveComponent } from './confirm-recieve.component';

describe('ConfirmRecieveComponent', () => {
  let component: ConfirmRecieveComponent;
  let fixture: ComponentFixture<ConfirmRecieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmRecieveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmRecieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
