const storageKey = "auth-token";

const authStorage = {
  storeToken(token: string) {
    localStorage.setItem(storageKey, token);
  },

  getToken() {
    return localStorage.getItem(storageKey);
  },

  removeToken() {
    localStorage.removeItem(storageKey);
  },
};

export default authStorage;
