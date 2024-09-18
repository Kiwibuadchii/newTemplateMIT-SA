import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PeriodicElement } from 'src/app/dashboard/dashboard-components/product/product.component';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { RecieveOrderService } from '../recieve-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recieve-order',
  standalone: true,
  imports: [ CommonModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule],
  templateUrl: './recieve-order.component.html',
  styleUrl: './recieve-order.component.scss'
})

export class RecieveOrderComponent {
  displayedColumns: string[] = ['id', 'assigned', 'budget','button'];
  dataSource:any = []

  constructor(
    private recieveService :RecieveOrderService,
    private routeNavigate : Router
  ) { }

  ngOnInit(): void {
    this.Table();
  }

  Table(){
    this.recieveService.getOrders().subscribe((res:any)=>{
      this.dataSource = res;
    });
  }
  add(){

    this.routeNavigate.navigateByUrl('orderadd')
  }

}
