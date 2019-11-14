let todos = []
const tbl = document.querySelector('.todo-table')

const saveItem = (todo) => {
    todos.push(todo)
}

let btn = document.querySelector('#add-btn')
btn.addEventListener('click', (event) => {
    event.preventDefault()
    let todoItem = document.querySelector('#todo-value').value
    saveItem(todoItem)
    updateList(todoItem)
})

const updateList = (todo) => {
    //for every new item make a new row
    let newRow = document.createElement('TR')
    //for every new row make a new data cell
    let newEl = document.createElement('TD')
    let newIn = document.createElement('INPUT')
    let newAtt = document.createAttribute('type')
    let newDel = document.createElement('BUTTON')
    let delAtt = document.createAttribute('type')
    newDel.innerText = "X"
    delAtt.value = "button"
    newAtt.value = "checkbox"
    newIn.setAttributeNode(newAtt)
    tbl.appendChild(newRow).appendChild(newEl).appendChild(newIn)
    newEl.insertAdjacentText('beforeend', todo)
    newEl.insertAdjacentElement('afterend', newDel)
}