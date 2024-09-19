import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { RecieveOrderService } from '../recieve-order.service';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfirmRecieveDetailsComponent } from './confirm-recieve-details/confirm-recieve-details.component';

@Component({
  selector: 'app-confirm-recieve',
  standalone: true,
  imports: [CommonModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './confirm-recieve.component.html',
  styleUrl: './confirm-recieve.component.scss'
})
export class ConfirmRecieveComponent {

  displayedColumns: string[] = ['id', 'assigned', 'budget','work','user','button'];
  dataSource:any = []
  readonly dialog = inject(MatDialog);
  constructor(
    private recieveService :RecieveOrderService,
    private routeNavigate : Router,
    private fb : FormBuilder
  ) { 

  }

  ngOnInit(): void {
    this.Table();
  }

  Table(){
    this.recieveService.getRecieve().subscribe((res:any)=>{
      this.dataSource = res;
    });
  }
  openDialog(id:any) {
    const dialogRef = this.dialog.open(ConfirmRecieveDetailsComponent, {
      height: '400px',
      width: '600px',
      data:{name:'ยืนยันรับของ',id:id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
