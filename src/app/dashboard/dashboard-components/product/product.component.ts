import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Order_No: string;
  name: string;
  work: string;
  project: string;
  priority: string;
  badge: string;
  budget: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Order_No: "J001", name: 'Cotton', work: 'D012', project: 'Factory01', priority: 'Waiting', badge: 'badge-primary', budget: '30 SEP 24' },
  { Order_No: "J002", name: 'Silk', work: 'D003', project: 'Factory01', priority: 'Waiting', badge: 'badge-primary', budget: '28 SEP 24' },
  { Order_No: "J003", name: 'Linen', work: 'D007', project: 'Factory04', priority: 'Urgent', badge: 'badge-danger', budget: '19 SEP 24' },
  { Order_No: "J004", name: 'Wool', work: 'D010', project: 'Factory03', priority: 'Reveived', badge: 'badge-success', budget: '17 SEP 24' },
  { Order_No: "J005", name: 'Polyester', work: 'D005', project: 'Factory02', priority: 'Reveived', badge: 'badge-success', budget: '13 SEP 24' },
];


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['Order_No', 'assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
