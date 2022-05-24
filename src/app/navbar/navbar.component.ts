import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AccountManagementService } from '../accounts/account-management.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AccountManagementService) { }

  ngOnInit(): void {
  }

  public handleLogout() : void {
    this.auth.logOut();
  }
}
