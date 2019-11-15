let todos = []
const tbl = document.querySelector('.todo-table')

let btn = document.querySelector('#add-btn')

btn.addEventListener('click', (event) => {
    event.preventDefault()
    let todoItem = document.querySelector('#todo-value')
    saveItem(todoItem.value)
    updateList(todoItem.value)
    todoItem.value = ''
})

const saveItem = (todo) => {
    todos.push(todo)
}

const updateList = (todo) => {
    //for every new item make a new row
    let newRow = document.createElement('TR')

    //for every new row make a new data cell
    let newEl = document.createElement('TD')

    //for each cell need to make an input field with an attribute
    let newIn = document.createElement('INPUT')
    let newAtt = document.createAttribute('type')

    //also need a delete button with button type and a class
    let newDel = document.createElement('BUTTON')
    let delAtt = document.createAttribute('type')
    let delClass = document.createAttribute('CLASS')
    newDel.innerText = "X"
    delClass.value = "del-btn"
    delAtt.value = "button"
    newAtt.value = "checkbox"
    newIn.setAttributeNode(newAtt)
    newDel.setAttributeNode(delClass)
    tbl.appendChild(newRow).appendChild(newEl).appendChild(newIn)
    newEl.insertAdjacentText('beforeend', todo)
    newEl.insertAdjacentElement('afterend', newDel)

    //need an event listener for the checkbox
    newIn.addEventListener('change', (event) => {
        if(event.target.checked) {
            event.target.parentElement.style.color = "red"
            event.target.parentElement.style.textDecoration = "line-through"
        } else {
            event.target.parentElement.style.color = "black"
            event.target.parentElement.style.textDecoration = "none"
        }
    })
    
    //need to add an event listener as the row is created with the delete button
    newDel.addEventListener('click', (event) => {
        let deleteBtn = event.target
        let parentDelete = deleteBtn.parentElement
        parentDelete.remove()
        let indexed = todos.indexOf(todo)
        todos.splice(indexed, 1)
    })
}