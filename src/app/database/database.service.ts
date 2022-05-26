import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Firestore, addDoc, collection, serverTimestamp, doc, Timestamp, limit, getDocs, getDoc } from '@angular/fire/firestore';
import { getDocFromCache, orderBy, query, where } from '@firebase/firestore';
import { AccountManagementService } from '../accounts/account-management.service';
import { InvaUser } from '../accounts/InvaUser';
import { Post } from './post';

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

  public async getPosts(uid: string, timestamp?: Timestamp, limt?: number): Promise<Post[] | undefined> {
    if (!this.userAccount.currentUser) return;
    const postRef = collection(this.firestore, 'posts');
    const filter = query(postRef, where('author', '==', uid), orderBy('createdAt'), limit(5));
    const posts = await getDocs(filter);
    return posts.docs as unknown as Post[];
  }

  public async getUser(uid: string) : Promise<InvaUser | undefined> {
    const userRef = doc(this.firestore, 'users', uid)
    const userDocument = await getDocFromCache(userRef)
    if (userDocument.exists()) return userDocument.data() as unknown as InvaUser;
    const liveUser = await getDoc(userRef);
    if (liveUser.exists()) return liveUser.data() as unknown as InvaUser;
    return;
  }
}
