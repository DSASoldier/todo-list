const timeDisplay = document.getElementById("time")

const timeElement = document.getElementById("time")

const updateTime = function () {

    chrome.storage.local.get(["task", "displayTime","delTask"], (res) => {

        let displayTime = res.displayTime
        const task = res.delTask;

        document.getElementById("task").textContent = `now its ${task.length?task:"???"}`;

        if (displayTime === 0) {
            document.getElementById("div-el").innerHTML = " ";
            menuList();
        }

        const hour=displayTime/3600;
        const minute=(displayTime%3600)/60;
        const sec=((displayTime%3600)%60);
        

        timeElement.textContent = `${String(Math.trunc(hour)).padStart(2, 0)}:${String(Math.trunc(minute)).padStart(2, 0)}:${String(Math.trunc(sec)).padStart(2, 0)}`

    });
}

updateTime();
setInterval(updateTime, 1000)


const menuList = function () {

    chrome.storage.local.get(["task"], (res) => {

        const task = res.task;
        console.log(task.length)
        console.log(task)

        for (let i = 0; i < task.length; i++) {
            const newDiv = document.createElement("div")
            const extraInput = document.createElement("input")
            const extraInput2 = document.createElement("input")
            const br = document.createElement("br")

            extraInput.type = "text"
            extraInput2.type = "text"

            extraInput.style.color = "black"
            extraInput.style.borderRadius = "7px"
            extraInput.style.width = "170px"
            extraInput.style.height = "22px"
            extraInput.style.marginRight = "10px"

            extraInput2.style.color = "black"
            extraInput2.style.borderRadius = "7px"
            extraInput2.style.width = "170px"
            extraInput2.style.height = "22px"

            extraInput.placeholder = "enter your task"
            const extraButton = document.createElement("button")

            extraButton.style = 'height: 23px; width: 100px;'
            extraButton.textContent = 'Save Task'
            extraButton.style.marginTop = "10px"
            extraButton.style.marginBottom = "10px"
            extraButton.style.marginRight = "10px"
            extraButton.style.borderRadius = "5px"

            extraInput.value = `${task[i][0]}`
            extraInput2.value = `${task[i][1]}`

            extraButton.addEventListener("click", () => {

                task[i][0] = extraInput.value;
                task[i][1] = extraInput2.value;

                chrome.storage.local.set({
                    task,
                })
                
            })

            const parentDiv = document.getElementById("div-el");

            newDiv.appendChild(extraInput)
            newDiv.appendChild(br)
            newDiv.appendChild(extraInput2)
            newDiv.appendChild(br)
            newDiv.appendChild(extraButton)

            console.log(newDiv)
            parentDiv.appendChild(newDiv)
        }
    })
}

menuList();