import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../demo-flexy-module';
import { Router } from '@angular/router';
import { ProductItemsService } from './product-items.service';

@Component({
  selector: 'app-product-items',
  standalone: true,
  imports: [ CommonModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.scss'
})
export class ProductItemsComponent {
  displayedColumns: string[] = ['id', 'assigned', 'budget','supplier','button'];
  dataSource:any = []

  constructor(
    private productService :ProductItemsService,
    private routeNavigate : Router
  ) { }

  ngOnInit(): void {
    this.Table();
  }

  Table(){
    this.productService.getOrders().subscribe((res:any)=>{
      this.dataSource = res;
    });
  }
  add(){
    this.routeNavigate.navigateByUrl('add-product')
  }

}
