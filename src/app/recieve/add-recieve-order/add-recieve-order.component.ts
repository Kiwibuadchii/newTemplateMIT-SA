import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AppModule } from 'src/app/app.module';
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
import { RecieveOrderService } from '../recieve-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recieve-order',
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
  templateUrl: './add-recieve-order.component.html',
  styleUrl: './add-recieve-order.component.scss'
})
export class AddRecieveOrderComponent {
 
formGroup : FormGroup

formGroupTag : FormGroup
productTag :any = []
tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  constructor(
   private recieveService :RecieveOrderService,
   private fb: FormBuilder,
    private router: Router

  ){
    this.formGroup = this.fb.group({
      re_actual_date:'',
      user_id:'',
      work_order_id:null
    })
    this.formGroupTag = this.fb.group({
      prod_code:'',
      qty_per_tag:'',
      re_order_id:''
    })
    this.getProduct()
  }

  submit(){
    this.recieveService.add(this.formGroup.value).subscribe({
      next:(res:any)=> {
        this.selected.setValue(1)
        this.formGroupTag.patchValue({
          re_order_id:res.id
        })
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }
  submitTag(){
    this.recieveService.add_pre_recieve(this.formGroupTag.value).subscribe({
      next:(res:any)=> {
        this.router.navigateByUrl('orderlist')        
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
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

}
