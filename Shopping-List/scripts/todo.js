const inpForm = document.querySelector("#inputForm")
const ul = document.querySelector("#list")

inpForm.addEventListener('submit',function(event)
{
    event.preventDefault();
    const item = document.querySelector('#listItem').value
    if (item.trim().length === 0){
        console.log('empty string');
    }
    else if (item === null){
        console.log('null string');
    }
    else {
        const list = document.createElement('li')
        const text = document.createTextNode(item)
        list.appendChild(text)
        ul.appendChild(list)
    }
}
)