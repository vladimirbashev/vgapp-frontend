import {Injectable} from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
      console.log('Save to localStorage')
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
        return null
      }
    } catch (e) {
      console.error('Error getting data from localStorage', e)
      return null
    }
  }
}
