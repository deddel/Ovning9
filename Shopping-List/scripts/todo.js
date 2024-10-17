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
    let toggle = event.target.outerHTML.includes('<s>')
    if (event.detail === 2) {
        event.preventDefault();
        if (toggle) {
            if (!event.target.outerHTML.includes('style')) {
                event.target.parentElement.outerHTML = ``
            }
            else {
                event.target.outerHTML = ``
            }
        }
        else {
            event.target.outerHTML = ``
        }
        boolDblClick = true;
        return
    }
    setTimeout(function () {
        if (event.detail === 1 && !boolDblClick) {
            event.preventDefault();
            let itemTarget = event.target
            let itemText = itemTarget.innerText

            if (toggle) {
                if (!event.target.outerHTML.includes('style')) {
                    event.target.parentElement.outerHTML = `<li>${itemText}</li>`
                }
                else {
                    event.target.outerHTML = `<li>${itemText}</li>`
                }
            }
            else {
                event.target.outerHTML = `<li style="background-color: #00ff00"><s>${itemText}</s></li>`
            }
            return
        }
    }, 400)
})


