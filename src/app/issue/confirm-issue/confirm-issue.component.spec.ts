import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmIssueComponent } from './confirm-issue.component';

describe('ConfirmIssueComponent', () => {
  let component: ConfirmIssueComponent;
  let fixture: ComponentFixture<ConfirmIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmIssueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
