import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user!: User | null;
  constructor(private auth: Auth) { }

  ngOnInit(): void {
    this.auth.onAuthStateChanged(currentUser => {
      this.user = currentUser;
    })
  }

  public handleLogout() : void {
    this.auth.signOut();
  }
}
