import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
import { ProductItemsService } from '../product-items.service';

@Component({
  selector: 'app-add-product',
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
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  formGroup : FormGroup
  constructor(
    private _Service :ProductItemsService,
    private fb: FormBuilder,
     private router: Router
 
   ){
     this.formGroup = this.fb.group({
      prod_name:'',
      qty_total_length:0,
      location_id:'',
      suppllier_name:'',
     })
 
   }
   submit(){
    this._Service.add(this.formGroup.value).subscribe({
      next:(res:any)=> {
        this.router.navigateByUrl('product')
        // this.selected.setValue(1)
        // this.formGroupTag.patchValue({
        //   re_order_id:res._id
        // })
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }

}
