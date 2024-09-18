import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmIssueDetailsComponent } from './confirm-issue-details.component';

describe('ConfirmIssueDetailsComponent', () => {
  let component: ConfirmIssueDetailsComponent;
  let fixture: ComponentFixture<ConfirmIssueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmIssueDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmIssueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
