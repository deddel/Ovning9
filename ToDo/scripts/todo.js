const inpForm = document.querySelector("#inputForm")
const ul = document.querySelector("#lista")

inpForm.addEventListener('submit',function(event)
{
    event.preventDefault();
    const task = document.querySelector('#todoTask').value
    if (task.trim().length === 0){
        console.log('empty string');
    }
    else if (task === null){
        console.log('null string');
    }
    else {
        const list = document.createElement('li')
        const text = document.createTextNode(task)
        list.appendChild(text)
        ul.appendChild(list)
    }
}
)