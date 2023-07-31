import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.css']
})
export class ValidateEmailComponent {
  email:any='';
  otp: number = 0;
  otpSent:boolean = false;
  constructor(private userService:UserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  sendOtp(){
    console.log("otp Sent");
    
    if(this.email != null && this.email !=''){
      try{
        this.userService.forgotPassword(this.email).subscribe();
        this.toastr.success('OTP Successfylly sent to your email !!', 'Success');
        this.otpSent = true;
      }
      catch{
        this.toastr.error('Failed to sent OTP on your email', 'Error');
      }
      
    }
    
  }

  validateOtp() {
    // Add your OTP validation logic here
    console.log("Validating your OTP");
      // Generate token
      const userValidation:any ={
        email: this.email,
        otp: this.otp
      }
      this.userService.validateOtp(userValidation).subscribe(
        (response:any)=>{
          //success
          console.log(response);
          if(response){
            localStorage.setItem("email",this.email);
            window.location.href="/resetPassword"
          }
          else{
            this.toastr.error('Failed to validate the OTP', 'Error');
          }
          
        },
        error=>{
          //error
          console.log(error);
          this.toastr.error('Failed to validate the OTP', 'Error');
        }
      )
  }

}
