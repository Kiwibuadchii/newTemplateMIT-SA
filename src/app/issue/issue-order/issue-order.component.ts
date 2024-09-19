import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IssueOrderService } from '../issue-order.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-issue-order',
  standalone: true,
  imports: [CommonModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule],
  templateUrl: './issue-order.component.html',
  styleUrl: './issue-order.component.scss'
})
export class IssueOrderComponent {

  displayedColumns: string[] = ['id', 'assigned', 'budget'];
  dataSource:any = []

  constructor(
    private issueService :IssueOrderService,
    private routeNavigate : Router
  ) { }

  ngOnInit(): void {
    this.Table();
  }

  Table(){
    this.issueService.getOrdersIssue().subscribe((res:any)=>{
      this.dataSource = res;
    });
}
add(){
  this.routeNavigate.navigateByUrl('addissue')
}
}
