class Todo {
  #complete
  constructor(title, description, dueDate, priority){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.#complete = false;
  }
  
  set complete(bool){
    this.#complete = bool;
  }
  get complete(){
    return this.#complete
  }
}

export{Todo}