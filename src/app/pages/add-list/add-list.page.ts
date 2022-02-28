import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { List } from '../../models/list.model';
import { ItemList } from '../../models/item-list.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {

  list: List;
  itemName = '';

  constructor( private taskService: TasksService, private route: ActivatedRoute ) {
    const listId = this.route.snapshot.paramMap.get('id');

    this.list = taskService.getList(listId);
  }

  ngOnInit() {
  }

  addItem() {
    if (this.itemName.length === 0) {
      return;
    }

    const newItem = new ItemList(this.itemName);
    this.list.items.push(newItem);

    this.itemName = '';

    this.taskService.saveStorage();
  }

}
