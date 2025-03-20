import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly storageKey = 'users';

  constructor() { }

  getUsers(): any[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  saveUser(user: any): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  findUser(phone: string, password: string): any {
    const users = this.getUsers();
    return users.find(user => user.phone === phone && user.password === password);
  }

  userExists(phone: string): boolean {
    const users = this.getUsers();
    return users.some(user => user.phone === phone);
  }
}
