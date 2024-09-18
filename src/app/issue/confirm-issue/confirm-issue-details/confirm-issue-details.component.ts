import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { IssueOrderService } from '../../issue-order.service';

@Component({
  selector: 'app-confirm-issue-details',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    DemoFlexyModule, 
  ],
  templateUrl: './confirm-issue-details.component.html',
  styleUrl: './confirm-issue-details.component.scss'
})
export class ConfirmIssueDetailsComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ConfirmIssueDetailsComponent>);
  formTagIssue :FormGroup

  constructor(
    private issueService :IssueOrderService,
    private routeNavigate : Router,
    private fb : FormBuilder
  ) { 
    this.formTagIssue = fb.group({
      prod_code:'',
      location_id:'',
      tag_recieve_id:'',
      tag_issue_id:'',
      iss_qty:'',
      tag_id:''
    })
    this.getByIdIssue()
  }
  getByIdIssue(){
    this.issueService.getIdIssue(this.data.id).subscribe({
      next:(res:any)=> {
        this.formTagIssue.patchValue({
          prod_code:res.prod_code,
          tag_recieve_id:'',
          tag_issue_id:this.data.id,
          iss_qty:res.iss_qty
        })
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }

}
