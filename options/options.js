const taskInputEl = document.getElementById("task");

const taskTimeEl = document.getElementById("time");

const button1 = document.getElementById("save");

button1.addEventListener("click", (res) => {

    chrome.storage.local.get(["task"], (res) => {

        let task = res.task??[];
        
        const a=taskInputEl.value,b=taskTimeEl.value;

        const arr=[a,b]

        task.push(arr)

        chrome.storage.local.set({
            task,
        }, () => {
            console.log(`task is set`);
        })
    })
})

const a=10;
chrome.storage.local.set({
    a,
},()=>{
    console.log("a is set",a)
})