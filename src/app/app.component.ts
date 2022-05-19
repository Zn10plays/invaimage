import { Component } from '@angular/core';
import { Auth, connectAuthEmulator } from '@angular/fire/auth';
import { connectFirestoreEmulator, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(fb: Firestore, auth: Auth) {
    connectFirestoreEmulator(fb, 'localhost', 8080)
  }
  title = 'invaimage';
}
