import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  lists: List[] = [];

  constructor() {

    const list1 = new List('Amazon wishlist');
    const list2 = new List('Aliexpress wishlist');

    this.lists.push(list1, list2);

    console.log(this.lists);
  }

  createList(title: string) {
    const newList = new List(title);
    this.lists.push(newList);
  }
}
