import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsComponent } from 'src/app/components/alerts/alerts.component';
import { ButtonsComponent } from 'src/app/components/buttons/buttons.component';
import { ChipsComponent } from 'src/app/components/chips/chips.component';
import { ExpansionComponent } from 'src/app/components/expansion/expansion.component';
import { FormsComponent } from 'src/app/components/forms/forms.component';
import { GridListComponent } from 'src/app/components/grid-list/grid-list.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ProgressSnipperComponent } from 'src/app/components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from 'src/app/components/progress/progress.component';
import { SlideToggleComponent } from 'src/app/components/slide-toggle/slide-toggle.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { TooltipsComponent } from 'src/app/components/tooltips/tooltips.component';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { IssueOrderService } from '../issue-order.service';

@Component({
  selector: 'app-addissue',
  standalone: true,
  imports: [   CommonModule,
    DemoFlexyModule,
    ButtonsComponent,
    SlideToggleComponent,
    SliderComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    FormsComponent,
    AlertsComponent,
    GridListComponent,
    TooltipsComponent,
    ReactiveFormsModule 
    ],
  templateUrl: './addissue.component.html',
  styleUrl: './addissue.component.scss'
})
export class AddissueComponent {

   
formGroup : FormGroup

formGroupTag : FormGroup
productTag :any = []
tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);
  
  constructor(
    private recieveService :IssueOrderService,
    private fb: FormBuilder,
     private router: Router
 
   ){
     this.formGroup = this.fb.group({
      iss_expected_date:'',
       user_id:'',
       issue_order_id:null
     })
     this.formGroupTag = this.fb.group({
       prod_code:'',
       iss_qty:'',
       production_order_id:''
     })
     this.getProduct()
   }

   getProduct(){
    this.recieveService.getProduct().subscribe({
      next:(res:any)=> {
        this.productTag = res
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }
  submit(){
    this.recieveService.addIssue(this.formGroup.value).subscribe({
      next:(res:any)=> {
        this.selected.setValue(1)
        this.formGroupTag.patchValue({
          production_order_id:res._id
        })
        console.log(this.formGroupTag.value);
        console.log(res);
        
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }
  submitTag(){
    this.recieveService.addIssueDetails(this.formGroupTag.value).subscribe({
      next:(res:any)=> {
        this.router.navigateByUrl('isuueorder')
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }

}
