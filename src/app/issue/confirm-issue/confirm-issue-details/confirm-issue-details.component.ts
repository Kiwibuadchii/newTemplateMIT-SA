import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { IssueOrderService } from '../../issue-order.service';
import { NgxScannerQrcodeModule, ScannerQRCodeConfig, ScannerQRCodeResult } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-confirm-issue-details',
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
    NgxScannerQrcodeModule
  ],
  templateUrl: './confirm-issue-details.component.html',
  styleUrl: './confirm-issue-details.component.scss'
})
export class ConfirmIssueDetailsComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ConfirmIssueDetailsComponent>);
  formTagIssue :FormGroup
  processAction:boolean = false;
  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth,
      },
      
      
    },
    // canvasStyles: [
    //   { /* layer */
    //     lineWidth: 1,
    //     fillStyle: '#00950685',
    //     strokeStyle: '#00950685',
    //   },
    //   { /* text */
    //     font: '17px serif',
    //     fillStyle: '#ff0000',
    //     strokeStyle: '#ff0000',
    //   }
    // ],
  };

  constructor(
    private issueService :IssueOrderService,
    private routeNavigate : Router,
    private fb : FormBuilder
  ) { 
    this.formTagIssue = fb.group({
      issue_order_id:'',
      iss_qty:'',
      tag_id:''
    })
    
  }
  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    // e && action && action.pause();
    console.log(e,"จับครั้งเดียวพอ");
    action.isBeep = false;
    if(e[0].value != null){
      this.handle(action,'stop')
      console.log("หยุดแล้ว");
      this.getByIdIssue(e[0].value)
      this.processAction = true
    }
    
  }
  getByIdIssue(id:any){
    this.issueService.getIdIssue(this.data.id).subscribe({
      next:(res:any)=> {
        this.formTagIssue.patchValue({
          issue_order_id:this.data.id,
          iss_qty:res.iss_qty,
          tag_id:id
        })
        console.log(this.formTagIssue.value);
        
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }
  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  submit(){
    this.issueService.AcceptIssue(this.formTagIssue.value).subscribe({
      next:(res:any)=> {
        // alert('ยืนยันการรับชิ้นงานสำเร็จ');
        this.dialogRef.close();
        // this.routeNavigate.navigate(['/issue']);
      },
      error:(err:any)=> {
        alert(err.message);
        console.log(err.message);
        
      }
    })
  }

}
