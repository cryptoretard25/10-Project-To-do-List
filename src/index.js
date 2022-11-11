const {log} = console;

import {Todo} from './todos.js'
import './style.css'

function createTask(title, description, dueDate, priority){
  return new Todo(title, description, dueDate, priority)
}

const task1 = createTask('My first To do', 'This is my first created Todo', '11-11-2022', 'high')
task1.complete=true;
log(task1.complete)
log(task1)
