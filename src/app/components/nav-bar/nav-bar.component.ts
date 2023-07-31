import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  public loggedIn =false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logoutUser(){
    console.log("Logging out the user");
    
    this.loginService.logout();
    location.reload();
  }
}
