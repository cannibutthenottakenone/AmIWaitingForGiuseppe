const responseElement = document.getElementById("response")
fetchAndApply()
setInterval(fetchAndApply, 900000)


function fetchAndApply() {
    getValue().then((value) => {
        if (value == -1) {
            responseElement.innerText = "Cannot fetch, try again later"
        }
        else if (value) {
            responseElement.innerText = "Yes, i am"
            classReplaceOrAdd(responseElement, "notWaiting", "waiting")

            titleReplaceOrAdd("❌", "✔")
        }
        else {
            responseElement.innerText = "No, i'm not"
            classReplaceOrAdd(responseElement, "waiting", "notWaiting")

            titleReplaceOrAdd("✔", "❌")
        }

    })
}

async function getValue() {
    let response = await fetch("https://amiwaitingforgiuseppe-com-default-rtdb.europe-west1.firebasedatabase.app/waiting.json")
    if (!response.ok) { return -1 }

    return (await response.json())
}

function classReplaceOrAdd(element, oldClass, newClass) {
    if (element.classList.contains(oldClass))
        element.classList.replace(oldClass, newClass)
    else
        element.classList.add(newClass)
}

function titleReplaceOrAdd(oldString, newString) {
    let title = document.title
    if (title.includes(newString)) return

    if (title.includes(oldString)) {
        title = title.replace(oldString, newString)
    }
    else {
        title = title + "  " + newString
    }

    document.title = title
}