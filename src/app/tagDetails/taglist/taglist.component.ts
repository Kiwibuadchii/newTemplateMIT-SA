import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { TagdetailService } from '../tagdetail.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-taglist',
  standalone: true,
  imports: [CommonModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule],
  templateUrl: './taglist.component.html',
  styleUrl: './taglist.component.scss'
})
export class TaglistComponent {
  displayedColumns: string[] = ['id', 'assigned','location','button'];
  dataSource:any = []
  readonly dialog = inject(MatDialog);

  constructor(
    private tagService :TagdetailService,
    private routeNavigate : Router
  ) { }

  ngOnInit(): void {
    this.Table();
  }

  Table(){
    this.tagService.getTagDetail().subscribe((res:any)=>{
      this.dataSource = res;
    });
  }
  openDialog(image:String) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      height: '400px',
      width: '600px',
      data:{name:'รายละเอียด',image:image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
