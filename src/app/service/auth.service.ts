import {Injectable} from '@angular/core';
import {UserManager, UserManagerSettings} from 'oidc-client';
import {Subject} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private manager = new UserManager(environment.config as UserManagerSettings);
  private user: any = null;
  private userLoginSubject = new Subject<boolean>();

  constructor() {
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }


  signIn(): Promise<void> {
    return this.manager.signinRedirect();
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  completeSignIn(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
      this.userLoginSubject.next(this.isLoggedIn());
      return this.user;
    });
  }

  signOut(): Promise<void> {
    sessionStorage.clear();
    return this.manager.signoutRedirect();
  }

}
