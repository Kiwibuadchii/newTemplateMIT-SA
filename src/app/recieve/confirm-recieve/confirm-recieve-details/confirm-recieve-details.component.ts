import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { RecieveOrderService } from '../../recieve-order.service';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-confirm-recieve-details',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    DemoFlexyModule, 
  ],
  templateUrl: './confirm-recieve-details.component.html',
  styleUrl: './confirm-recieve-details.component.scss'
})
export class ConfirmRecieveDetailsComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ConfirmRecieveDetailsComponent>);
  formTagRecieve :FormGroup
  locations:any =[]

  constructor(
    private recieveService :RecieveOrderService,
    private routeNavigate : Router,
    private fb : FormBuilder
  ) { 
    this.formTagRecieve = fb.group({
      prod_code:'',
      location_id:'',
      tag_recieve_id:'',
      tag_issue_id:'',
      qty_per_tag:''
    })
    this.getLocation()    
    this.getByIdRecieve()
  }

  getLocation(){
    this.recieveService.getLocation().subscribe({
      next:(res:any)=> {
        this.locations = res
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }
  getByIdRecieve(){
    this.recieveService.getIdRecieve(this.data.id).subscribe({
      next:(res:any)=> {
        this.formTagRecieve.patchValue({
          prod_code:res.prod_code,
          tag_recieve_id:this.data.id,
          tag_issue_id:'',
          qty_per_tag:res.qty_per_tag
        })
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }

  submit(){
    this.recieveService.add_tag_detail(this.formTagRecieve.value).subscribe({
      next:(res:any)=> {
        this.dialogRef.close()
        
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
    
  }

}
