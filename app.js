let todos = [];

const getItem = (todo) => {
    //code to retrieve an item from localStorage API
    let item = localStorage.getItem('todo')
    console.log(`${todo} was found.`)
    return item
}

const saveItem = (todo) => {
    //code to set an item to local storage
    todos.push(todo);
    localStorage.setItem(todos.length, 'todo')
    alert(`${todo} was added.`)
}

