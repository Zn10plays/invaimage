import { Component, OnInit } from '@angular/core';
import { collection, Firestore, serverTimestamp } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { addDoc } from '@firebase/firestore';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  control = new FormControl('', [Validators.required])

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
  }

  handleSubmit(event: Event) {
    event.preventDefault();
  }

  addPlainText(text: string) {

  }
}
