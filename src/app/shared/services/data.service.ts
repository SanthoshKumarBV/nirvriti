import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('');
  private messageSourceCart = new BehaviorSubject('');
  currentPage = this.messageSource.asObservable();
  currentCart = this.messageSourceCart.asObservable()

  constructor() { }

  changePage(message: string) {
    this.messageSource.next(message)
  }

  getCart(total: string){
    this.messageSourceCart.next(total)
  }

}
