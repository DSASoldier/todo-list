
chrome.storage.local.get(["displayTime"],(res)=>{
      const displayTime=res.displayTime 
      const hour=displayTime/3600
      const minute=(displayTime%3600)/60
      const sec=((displayTime%3600)%60)
          
      const time = `${String(Math.trunc(hour)).padStart(2, 0)}:${String(Math.trunc(minute)).padStart(2, 0)}:${String(Math.trunc(sec)).padStart(2, 0)}`

      const Div=document.createElement("div");
      const h1=document.createElement("h1");
      h1.className="h1"
      h1.append(time)
      h1.style.backgroundColor="black"
      h1.style.color="white"
      h1.style.fontSize="100px"
      h1.style.height="300px"
      h1.style.paddingTop="100px"
      document.body.prepend(h1)
})

const update=function(){

      chrome.storage.local.get(["displayTime"],(res)=>{

        const h1=document.querySelector(".h1")
        const displayTime=res.displayTime

        const hour=displayTime/3600
        const minute=(displayTime%3600)/60
        const sec=((displayTime%3600)%60)
        
        
        h1.innerHTML = `${String(Math.trunc(hour)).padStart(2, 0)}:${String(Math.trunc(minute)).padStart(2, 0)}:${String(Math.trunc(sec)).padStart(2, 0)}`
      })
}

update();
setInterval(update,1000);