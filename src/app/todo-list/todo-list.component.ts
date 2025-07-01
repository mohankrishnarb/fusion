import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

export interface todoItem{
  id: number,
  task: string,
  complete: boolean
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule,NgFor,MatFormFieldModule,MatInputModule,MatIconModule,MatCheckboxModule ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
newTask: string = '';
todolist: todoItem [] = [];

addTask():void{
  if (this.newTask.trim() !== ''){
    const newTodoItem: todoItem = {
      id: Date.now(),
      task: this.newTask,
      complete: false
    }

    this.todolist.push(newTodoItem);
    console.log(this.todolist);
    this.newTask = '';
  }
}

toggleCompleted(index: number):void{
  console.log(index);
  this.todolist[index].complete = !this.todolist[index].complete;
  console.log(this.todolist);
  
}

deleteTask(id:number):void{
  this.todolist = this.todolist.filter(item => item.id !== id);
  console.log(this.todolist);
  
}

}
