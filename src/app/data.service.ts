import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals=new BehaviorSubject<any>(['goal','goal 2'])
  goal=this.goals.asObservable();
  constructor() { }
  changeGoad(goal){
    this.goals.next(goal);
  }
}
