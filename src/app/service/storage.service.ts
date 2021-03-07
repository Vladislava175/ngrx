import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  setItem(key: string, value: any) {
    debugger
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  getItem(key: string) {
    debugger
    const data = localStorage.getItem(key);
    return data != null ? JSON.parse(typeof data === 'string' ? data : '') : data;
  }

  clear() {
    localStorage.clear();
  }
}
