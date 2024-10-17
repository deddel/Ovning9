const inpForm = document.querySelector("#inputForm")
const ul = document.querySelector("#list")

inpForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const item = document.querySelector('#listItem').value
    if (item.trim().length === 0) {
        console.log('empty string');
    }
    else if (item === null) {
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

ul.addEventListener('click', function (event) {
    event.preventDefault();
    let itemTarget = event.target
    let itemText = itemTarget.innerText
    // console.log(itemText)
    // console.log(itemTarget);
    // console.log(itemTarget.outerHTML)
    itemTarget.outerHTML = `<li style="background-color: #00ff00">
                            <s>${itemText}</s></li>`
})

//TODO Doubble click to remove, not functional yet 
// ul.addEventListener('dblclick', function (event) {
//     event.preventDefault();
//     console.log('doubble click');
    // event.target.remove()
    // let itemTarget = event.target
// })

