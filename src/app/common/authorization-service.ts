import { Injectable } from '@angular/core';
import { Context, UserInfo } from '@remult/core';

@Injectable()
export class CookieAuthorizationService {
    pathForCookie?: string;
    constructor(private context: Context ) {
        if (typeof document !== "undefined"){
            let c = document.cookie;
            let i = c.indexOf(this.authCookieName + '=');
            if (i >= 0) {
                c = c.substring(i + this.authCookieName.length + 1).trim();
                i = c.indexOf(';');
                if (i >= 0) {
                    c = c.substring(0, i - 1);
                }
                this._setToken(c);
            }
        }
    }
    private authCookieName = 'authorization';
    
  
    tokenInfoChanged: () => void;
    afterSignIn(jwtToken: string, rememberOnDevice = false) {
        if (jwtToken) {
            this._setToken(jwtToken);
            let c = this.authCookieName + "=" + jwtToken;

            if (rememberOnDevice)
                c += '; expires = Thu, 01 Jan 2076 00:00:00 GMT';
            if (this.pathForCookie)
                c += '; path=' + this.pathForCookie;
            else
                c += ';path=/'
            document.cookie = c;
            return true;
        }
        else this.signOut();
        return false;
    }
    signOut() {
        this._setToken('');
        let c = this.authCookieName + '=; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        if (this.pathForCookie)
            c += '; path=' + this.pathForCookie;
        else
            c += ';path=/'
        document.cookie = c;
    }
    private _setToken(token: string) {

        let user: UserInfo = undefined;
        if (token) {
            {
                try { user = this.decodeToken(token); }
                catch (err) { console.log(err); }
            }
        }
        this.context._setUser(user);
        if (this.tokenInfoChanged)
            this.tokenInfoChanged();
    }
    private urlBase64Decode(str: string): string {
        let output = str.replace(/-/g, "+").replace(/_/g, "/");
        switch (output.length % 4) {
          case 0: {
            break;
          }
          case 2: {
            output += "==";
            break;
          }
          case 3: {
            output += "=";
            break;
          }
          default: {
            throw new Error("Illegal base64url string!");
          }
        }
        return this.b64DecodeUnicode(output);
      }
    
      // credits for decoder goes to https://github.com/atk
      private b64decode(str: string): string {
        const chars =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let output = "";
    
        str = String(str).replace(/=+$/, "");
    
        if (str.length % 4 === 1) {
          throw new Error(
            "'atob' failed: The string to be decoded is not correctly encoded."
          );
        }
    
        for (
          // initialize result and counters
          let bc = 0, bs: any, buffer: any, idx = 0;
          // get next character
          (buffer = str.charAt(idx++));
          // character found in table? initialize bit storage and add its ascii value;
          ~buffer &&
          ((bs = bc % 4 ? bs * 64 + buffer : buffer),
          // and if not first of each 4 characters,
          // convert the first 8 bits to one ascii character
          bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0
        ) {
          // try to find character in table (0-63, not found => -1)
          buffer = chars.indexOf(buffer);
        }
        return output;
      }
    
      private b64DecodeUnicode(str: any) {
        return decodeURIComponent(
          Array.prototype.map
            .call(this.b64decode(str), (c: any) => {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );
      }
    
      public decodeToken(token: string ): UserInfo {
        if (!token || token === "") {
          return null;
        }
    
        const parts = token.split(".");
    
        if (parts.length !== 3) {
          throw new Error(
            "invalid token"
          );
        }
    
        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
          throw new Error("Cannot decode the token.");
        }
    
        return JSON.parse(decoded);
      }
}