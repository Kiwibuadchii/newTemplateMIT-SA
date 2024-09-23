import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../demo-flexy-module';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAdminService } from './user-admin.service';

@Component({
  selector: 'app-user-admin',
  standalone: true,
  imports: [CommonModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule],
  templateUrl: './user-admin.component.html',
  styleUrl: './user-admin.component.scss'
})
export class UserAdminComponent {
  displayedColumns: string[] = ['id', 'assigned','location','position','button'];
  dataSource:any = []
  readonly dialog = inject(MatDialog);

  constructor(
    private userService :UserAdminService,
    private routeNavigate : Router
  ) { }

  ngOnInit(): void {
    this.Table();
  }

  Table(){
    this.userService.getUserDetail().subscribe((res:any)=>{
      this.dataSource = res;
    });
  }
  add(){
    this.routeNavigate.navigateByUrl('add-user')
  }

}
