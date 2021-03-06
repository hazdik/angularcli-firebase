import { Injectable } from "@angular/core";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
@Injectable()
export class AF {
  constructor(public af: AngularFire) { }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */

  socialLogin(loginProvider) {
    var provider;
    if (loginProvider === 'google') {
      provider = AuthProviders.Google;
    }
    else if (loginProvider === 'facebook') {
      provider = AuthProviders.Facebook;
    }
    else if (loginProvider === 'github') {
      provider = AuthProviders.Github;
    }
    else if (loginProvider === 'twitter') {
      provider = AuthProviders.Twitter;
    }

    return this.af.auth.login({
      provider: provider,
      method: AuthMethods.Popup,
    });
  }

  
  /**
   * Logs out the current user
   */
  logout() {

    return this.af.auth.logout();
  }
}