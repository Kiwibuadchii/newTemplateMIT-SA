import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { IssueOrderService } from '../issue-order.service';
import { ConfirmIssueDetailsComponent } from './confirm-issue-details/confirm-issue-details.component';

@Component({
  selector: 'app-confirm-issue',
  standalone: true,
  imports: [CommonModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './confirm-issue.component.html',
  styleUrl: './confirm-issue.component.scss'
})
export class ConfirmIssueComponent {

  displayedColumns: string[] = ['id', 'assigned', 'budget','iss','button'];
  dataSource:any = []
  readonly dialog = inject(MatDialog);
  constructor(
    private issueService :IssueOrderService,
    private routeNavigate : Router,
    private fb : FormBuilder
  ) { 

  }

  ngOnInit(): void {
    this.Table();
  }

  Table(){
    this.issueService.getConfirm_OrdersIssue().subscribe((res:any)=>{
      this.dataSource = res;
      console.log(this.dataSource,"dataSource: ");
      
    });
  }
  openDialog(id:any) {
    const dialogRef = this.dialog.open(ConfirmIssueDetailsComponent, {
      height: '400px',
      width: '600px',
      data:{name:'อนุมัติเบิกจ่าย',id:id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
