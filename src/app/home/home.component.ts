import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email = new FormControl('', [Validators.email, Validators.required])
  password = new FormControl('', [Validators.required])


  constructor(public auth: Auth) {}

  handleLoginWithCredit() {
    if (this.email.invalid) return;
    if (this.password.invalid) return;
    signInWithEmailAndPassword(this.auth, this.email.value, this.password.value)
  }

  handleSignWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider);
  }
}
