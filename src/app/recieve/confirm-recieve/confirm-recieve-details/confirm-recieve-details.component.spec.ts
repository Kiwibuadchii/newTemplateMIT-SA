import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRecieveDetailsComponent } from './confirm-recieve-details.component';

describe('ConfirmRecieveDetailsComponent', () => {
  let component: ConfirmRecieveDetailsComponent;
  let fixture: ComponentFixture<ConfirmRecieveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmRecieveDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmRecieveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
