class LocalStorageService {
    static service = new LocalStorageService();
    keys = {
        TOKEN: 'token',
    };

    saveToken(accessToken) {
       return localStorage.setItem(this.keys.TOKEN, accessToken);
    }

    getAccessToken() {
        return localStorage.getItem(this.keys.TOKEN);
    }
}

export default LocalStorageService.service;