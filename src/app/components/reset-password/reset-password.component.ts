import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email:any='';
  password1: any='';
  password2: any='';
  passwordMatch:boolean = false;
  constructor(private userService:UserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
  }

  resetPassword() {
    // Add your OTP validation logic here
    console.log("Reset your Password");
      // Generate token
      const userData:any ={
        email: this.email,
        password: this.password1
      }
      if((this.password1!= null && this.password1!= '') &&
      (this.password2!= null && this.password2!= '') &&
      (this.password1 === this.password2)){
        this.userService.resetPassword(userData).subscribe(
          (response:any)=>{
            //success
            console.log(response);
            if(response){
              window.location.href="/login"
            }
            else{
              this.toastr.error('Failed to reset your password', 'Error');
            }
            
          },
          error=>{
            //error
            console.log(error);
            this.toastr.error('Failed to reset your password', 'Error');
          }
        )
      }
      else{
        this.toastr.error('New Password and Confirm Password are not matched', 'Error');
      }
      
  }

}
