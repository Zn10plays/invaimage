import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, serverTimestamp, DocumentReference } from '@angular/fire/firestore';
import { AccountManagementService } from '../accounts/account-management.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: Firestore, private userAccount: AccountManagementService) { }

  public async addTextAsPost (text: string) {
    console.log('adding:  ' + text)
    addDoc(collection(this.firestore, 'posts'), {
      author: this.userAccount.currentUser?.uid,
      value: text,
      createdAt: serverTimestamp(),
      contentType: 'text',
    })
  }

  // public async addImageAsPost () : Promise<DocumentReference> {

  // }
}
