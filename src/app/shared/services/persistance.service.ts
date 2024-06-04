import {Injectable} from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.error('Error removing to localStorage', e)
    }
  }

  get(key: string): any {
    try {
      let item = localStorage.getItem(key)
      if (item) {
        return JSON.parse(item)
      } else {
        console.error('Error getting data from localStorage')
        return null
      }
    } catch (e) {
      console.error('Error getting data from localStorage', e)
      return null
    }
  }
}
