import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccountManagementService } from '../accounts/account-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email = new FormControl('', [Validators.email, Validators.required])
  password = new FormControl('', [Validators.required])


  constructor(public auth: AccountManagementService) {}

  handleLoginWithCredit() {
    if (this.email.invalid) return;
    if (this.password.invalid) return;
    this.auth.loginWithCredit(this.email.value, this.password.value)
  }

  handleSignWithGoogle() {
    this.auth.loginWithGoogle();
  }

  logout() {
    this.auth.logOut();
  }
}
