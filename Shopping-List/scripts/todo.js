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
    let boolDblClick = false
    if (event.detail === 2){
        console.log(event.target.outerHTML);
        console.log(event.target.innerHTML);
        console.log(event.target.parentNode);
        event.target.outerHTML = ``
        boolDblClick = true;
        return
    }
    setTimeout( function () {
        if (event.detail === 1 && !boolDblClick) {
            event.preventDefault();
            let itemTarget = event.target
            let itemText = itemTarget.innerText
            let oHTML = event.target.outerHTML
            let toggle = oHTML.includes('style')
            if (toggle){
                event.target.outerHTML = `<li>${itemText}</li>` 
            }
            else {
                event.target.outerHTML = `<li style="background-color: #00ff00"><s>${itemText}</s></li>`
            }
            return
            }
    }, 400)
  })


