import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
export class LoggingService {
  lastlog: string;

  constructor() { }

  printLog(message: string) {
    console.log(message);
    console.log(this.lastlog);
    this.lastlog = message;
  }
}
