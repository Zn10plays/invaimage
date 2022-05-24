import { Injectable } from '@angular/core';
import { Auth, AuthProvider, GoogleAuthProvider, signInWithPopup, User, signInWithEmailAndPassword } from '@angular/fire/auth';
import { doc, Firestore, getDoc, DocumentReference, setDoc, serverTimestamp, DocumentData } from '@angular/fire/firestore';
import { InvaUser } from './InvaUser';

@Injectable({
  providedIn: 'root'
})

export class AccountManagementService {
  private user!: User | null;
  private invaUserDetail!: InvaUser | DocumentData | string | null;
  private googleProvider: AuthProvider = new GoogleAuthProvider();

  constructor(private auth: Auth, private firestore: Firestore) {
    auth.onAuthStateChanged(async user => {
      if (!user) {this.user = null; return;}
      this.user = user;
      const info = await this.getUserInfo(user);
      this.invaUserDetail = info;
    })
  }

  get currentUser() {
    return this.user;
  }

  get invaDetail(): InvaUser | DocumentData | string | null  {
    return this.invaUserDetail;
  }

  public loginWithCredit(username: string, password: string) {
    signInWithEmailAndPassword(this.auth, username, password)
  }

  public loginWithGoogle() {
    signInWithPopup(this.auth, this.googleProvider)
  }

  private async getUserInfo(userKey: User): Promise<DocumentData> {
    this.invaUserDetail = 'pending';
    const userDoc = doc(this.firestore, 'users', userKey.uid);
    const data = await getDoc(userDoc);
    if (data.exists()) return data.data()
      
    await this.registerNewUser(userKey, userDoc);
    const res = await getDoc(userDoc);
    if (res.exists()) return res.data()

    return new Error('not possible you fucked up big time your fault')
  }

  private async registerNewUser(userKey: User, docRef: DocumentReference) {
    return setDoc(docRef, {
      name: userKey.displayName,
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
