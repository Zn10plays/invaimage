import { Injectable } from '@angular/core';
import { Auth, AuthProvider, GoogleAuthProvider, signInWithPopup, User, signInWithEmailAndPassword } from '@angular/fire/auth';
import { doc, Firestore, getDoc, DocumentReference, setDoc, serverTimestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AccountManagementService {
  private user!: User | null;
  private googleProvider: AuthProvider = new GoogleAuthProvider();

  constructor(private auth: Auth, private firestore: Firestore) {
    auth.onAuthStateChanged(async user => {
      if (!user) {this.user = null; return;}
      const info = this.getUserInfo(user);
      this.user = user;
    })
  }

  get currentUser() {
    return this.user;
  }

  public loginWithCredit(username: string, password: string) {
    signInWithEmailAndPassword(this.auth, username, password)
  }

  public loginWithGoogle() {
    signInWithPopup(this.auth, this.googleProvider)
  }

  private async getUserInfo(userKey: User) {
    const userDoc = doc(this.firestore, 'users', userKey.uid);
    const data = await getDoc(userDoc);
    console.log(data.data())
  }

  private async registerNewUser(user: User, docRef: DocumentReference) {
    return setDoc(docRef, {
      name: user.displayName,
      active: false,
      role: [],
      createdAt: serverTimestamp()
    })
  }

  public logOut() {
    this.auth.signOut();
    this.user = null;
  }
}
