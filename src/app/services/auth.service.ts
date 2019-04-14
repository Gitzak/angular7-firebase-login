import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  loginWithEmailAndPassword(user: { email: any; password: any; }) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  createUser(user: { email: any; password: any; }) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  userAuth() {
    return this.afAuth.user;
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }
}
