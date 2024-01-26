chrome.alarms.create({
    periodInMinutes: 1 / 60,
})

let displayTime=0
let delTask =""

const task=[]

chrome.storage.local.set({
    task,
})

chrome.alarms.onAlarm.addListener((alarm) => {

        // console.log(displayTime)

        chrome.storage.local.get(["task"], (res) => {

        let task=res.task
        
        

        if(displayTime===0)
        {
            if(task.length) 
            {
                displayTime=(Number(task[0][1])*60*60)

                console.log(displayTime)
                delTask=task[0][0]
            }
            else{
                delTask="???";
            }

            if(task.length)
            {
                chrome.notifications.create(
                    "To Do List",
                    {
                    type: "basic",
                    iconUrl: "icon.png",
                    title: "This is a notification",
                    message:`its time for ${task.length?task[0][0]:" "}`,
                    },
                    function () {}
                );

                task.shift();
                
                chrome.storage.local.set({
                    task,
                    delTask
               })

            }             
        }

        chrome.storage.local.set({
            displayTime,
            delTask
        })

        if(displayTime) displayTime--;
    })
})