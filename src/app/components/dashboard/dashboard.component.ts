import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  userId: number;
  email: string;
  gender: string;
  phone_number: string;
  state: string;
  city: string;
}

interface ApiResponse {
  data: UserData[]; // Your API response contains an array of UserData
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userDetails: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['userId', 'email', 'gender', 'phone_number', 'state', 'city'];

  getUser() {
    this.userService.getUser().subscribe(
      (response:any) => {
        this.userDetails = response.data; // Store the users array directly
        console.log("this.userDetails :",this.userDetails );
        
      },
      error => {
        console.log(error);
      }
    );
  }

  onRowClick(row: UserData) {
    console.log('Clicked Row:', row);
    // Do whatever you want with the row data here, e.g., show a modal, navigate to another page, etc.
  }
}
