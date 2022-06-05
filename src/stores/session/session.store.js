import { observable, action, computed, toJS, makeObservable } from "mobx";

const initialSession = {
  loading: false,
  user: null,
  token: null,
};

class SessionStore {
  loading = false;
  user = null;
  token = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      token: observable,
      loading: observable,
      getUser: computed,
      getAccessToken: computed,
      isLoggedIn: computed,
      setSession: action,
      logOutSession: action,
      resetState: action,
    });
    this.checkAndSetSession();
  }

  checkAndSetSession() {
    const remember = localStorage.getItem("remember") == "true";
    var sessionFromStorage = null;
    if (remember) {
      //take it from localstorage
      sessionFromStorage = localStorage.getItem("session")
        ? JSON.parse(localStorage.getItem("session"))
        : null;
    } else {
      //take it from sessionstorage
      sessionFromStorage = sessionStorage.getItem("session")
        ? JSON.parse(sessionStorage.getItem("session"))
        : null;
    }

    if (sessionFromStorage) {
      this.setSession(sessionFromStorage, false, true);
    }
  }

  get getUser() {
    return toJS(this.user);
  }

  get getAccessToken() {
    return toJS(this.token);
  }

  /**
   * Return the state of user loggedin
   */
  get isLoggedIn() {
    if (this.user && this.token) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Set user session to the store
   * @typedef {Object} Session
   * @property {boolean} loading whethe session is in loading state.
   * @property {any} user currently logged in user
   * @property {string} token currently logged in user's access token
   * @param {Session} session
   */
  setSession(session, remember = false, ingorestorage = false) {
    for (const property in session) {
      if (Object.hasOwnProperty.call(session, property)) {
        const value = session[property];
        if (this.hasOwnProperty(property)) {
          this[property] = value;
        }
      }
    }
    if (ingorestorage) {
      return;
    }
    localStorage.setItem("remember", remember);
    if (remember) {
      localStorage.setItem("session", JSON.stringify(session));
      sessionStorage.removeItem("session");
    } else {
      sessionStorage.setItem("session", JSON.stringify(session));
      localStorage.removeItem("session");
    }
  }

  /**
   * Logout user from session
   */
  logOutSession() {
    this.resetState();
    localStorage.removeItem("session");
    localStorage.removeItem("remember");
    sessionStorage.removeItem("session");
  }

  resetState() {
    for (const property in initialSession) {
      if (Object.hasOwnProperty.call(initialSession, property)) {
        const value = initialSession[property];
        if (this.hasOwnProperty(property)) {
          this[property] = value;
        }
      }
    }
  }
}

export const sessionStore = new SessionStore();
