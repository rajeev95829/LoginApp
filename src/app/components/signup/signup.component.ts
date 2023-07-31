import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userDetails={
    username:'',
    email:'',
    password:'',
    gender:'',
    phoneNumber:'',
    state:'',
    city:''
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  signUpUser(){
    console.log("user Data: ",this.userDetails);
    console.log("form is submitted");
    if((this.userDetails.email!= '' && this.userDetails.password!='') && (this.userDetails.email!= null && this.userDetails.password!=null)){
      console.log("We have to submit the form");
      // Generate token
      this.userService.signUpUser(this.userDetails).subscribe(
        (response:any)=>{
          //success
          console.log(response);
          window.location.href="/login"
        },
        error=>{
          //error
          console.log(error);
          
        }
      )

    }else{
      console.log("Fields are empty !!");
    }
    
  }

  resetUserDetails(){
    this.userDetails.username='',
    this.userDetails.email='',
    this.userDetails.password='',
    this.userDetails.gender='',
    this.userDetails.phoneNumber='',
    this.userDetails.state='',
    this.userDetails.city='';
    console.log(" After Reset user Data: ",this.userDetails);
  }

}
