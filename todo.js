/*let container = document.getElementById('container')
var CrntDate = document.getElementById('current_date')
let TodoWork = document.getElementById('work_todo')
let DueDate = document.getElementById('due_date')

console.log(CrntDate)

function createWork() {
    let div = document.createElement('div')
    div.className = 'todo_div'

    let divEl = document.createElement('h3')
    div.className = 'todo_div_strt_date'
    div.innerText = CrntDate.value
    

    let divtwoEl = document.createElement('h3')
    div.className = 'todo_div_to_do'
    div.innerText = TodoWork.value

    let divthreeEl = document.createElement('h3')
    div.className = 'todo_div_due_date'
    div.innerText = DueDate.value

    let button = document.createElement('button')
    div.className = 'delete'
    div.innerText = '×'

    div.appendChild(divEl)
    div.appendChild(button)
    div.appendChild(divtwoEl)
    div.appendChild(divthreeEl)


    container.appendChild(div)
}*/
 let container = document.getElementById('container')
 let namee = document.getElementById('nameInput')
 let father = document.getElementById('FatherInput')
 let score = document.getElementById('Score')
 let serial = parseFloat(0)
 let total = parseFloat(0)

 function Edit_info() {
    
    let NewRow = document.createElement('tr')
    NewRow.className = 'new_row'

    let serialNumber = document.createElement('td')
    serialNumber.className = 'table_data'
    serialNumber.innerText = ++serial


    let newName = document.createElement('td')
    newName.className = 'table_data'
    newName.innerText = namee.value


    let newFather = document.createElement('td')
    newFather.className = 'table_data'
    newFather.innerText = father.value


    let newScore = document.createElement('td')
    newScore.className = 'table_data'
    let updatedScore = parseFloat(newScore.innerText = score.value)


    let totalScore = document.createElement('td')
    totalScore.className = 'table_data'
    total += updatedScore
    totalScore.innerText = total

    container.appendChild(NewRow)

    NewRow.appendChild(serialNumber)
    NewRow.appendChild(newName)
    NewRow.appendChild(newFather)
    NewRow.appendChild(newScore)
    NewRow.appendChild(totalScore)

var inputContainer =document.getElementById("inputContainer");
inputContainer.style.display = "none";

document.getElementById("nameInput").value = ""
document.getElementById("FatherInput").value = ""
document.getElementById("Score").value = ""

}

function showIpnut() {
    var inputContainer = document.getElementById("inputContainer");
    if (inputContainer.style.display === "none") {
        inputContainer.style.display = "flex";
    }
}
