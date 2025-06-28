let stories = document.getElementById("stories");
let hidden = document.getElementById("hidden");
let vidDiv = document.getElementById("vidDiv");
let vid = document.getElementById("vid");
let closeSt = document.getElementById("close")
let allSt = document.getElementsByClassName("allSt")
let sugs = document.getElementById("sugs")
let switchK = document.getElementById("switch")
let navUl = document.getElementById("navUl")
let nav = document.getElementById("nav")
let userImg = document.getElementById("userImgg")
sugs.addEventListener("click",(event) => {
    if (event.target.innerText === "Follow" && event.target.className === "click") {
        event.target.innerText = "Requested"
        event.target.className = "click1"
    }
    else if (event.target.innerText == "Requested") {
        let elem = event.target;
        let newUnfollow = document.createElement("div")
        let unfollow = document.createElement("p")
        unfollow.innerText = "Unfollow"
        unfollow.id = "unfollow"
        unfollow.className = "lastP" 
        let can = document.createElement("p")
        can.id = "cancel"
        can.innerText = "Cancel"
        can.className = "lastP" 
        newUnfollow.id = "unF"
        console.log(event.target.parentElement.firstElementChild.firstElementChild.src);
           newUnfollow.innerHTML = `<div class="unF">
        <div style="background-image: url(${event.target.parentElement.firstElementChild.firstElementChild.src})"></div>
        <p>If you change your mind, you'll have to request to <br> follow @${event.target.previousElementSibling.firstElementChild.innerText}.</p>
        </div>
        
        ` 
        newUnfollow.firstElementChild.append(unfollow,can)
        newUnfollow.style.display = "flex"
        document.body.append(newUnfollow)

        unfollow.addEventListener("click",() => {
            newUnfollow.style.display = "none"
            elem.innerText = "Follow" 
            elem.className = "click"
        })
        can.addEventListener("click",() => {
            newUnfollow.style.display = "none"
        })
    }
})

stories.addEventListener("click",(event) => {
    if (event.target.className == "story") {
        let newElem = document.createElement("div")
        newElem.className = "allSt"
        newElem.innerHTML = `${event.target.parentElement.parentElement.innerHTML}`
        newElem.firstElementChild.style.background = "#dddddd";
        event.target.parentElement.style.background = "#dddddd";
        newElem.firstElementChild.style.width = "36px";
        newElem.firstElementChild.style.height = "36px";    
        newElem.firstElementChild.firstElementChild.style.width = "32px";
        newElem.firstElementChild.firstElementChild.style.height = "32px";
        newElem.style.height = "52px"
        newElem.style.position = "relative"
        newElem.style.width = "110px"
        newElem.style.flexDirection = "row"
        newElem.style.left = "119px"
        newElem.style.color = "#fff"
        newElem.style.justifyContent = "spaceBetween"
        newElem.style.fontSize = "14px"
        newElem.firstElementChild.style.marginRight = "6px"
        vidDiv.style.display = "flex"
        vidDiv.innerHTML = `
        <video id="vid" loop autoplay style="height: 90vh; border-radius: 5%;" src="./videos/YouTube shorts logo reveal.mp4">
        <source src="./videos/YouTube shorts logo reveal.mp4" type="video/mp4">
        </video>` 
        
        vidDiv.prepend(newElem)
        hidden.style.display = "flex"
    }

closeSt.addEventListener("click",() => {
    
    vidDiv.innerHTML = ""
    hidden.style.display = "none"
})
})

switchK.addEventListener("click",(event) => {
    let newUnfollow = document.createElement("div")
    let newAcc = document.createElement("div")  
    newAcc.innerHTML = `<img style="width: 56px; height: 56px; border-radius: 50%; margin-right: 8px" src="${event.target.parentElement.firstElementChild.firstElementChild.src}">${event.target.previousElementSibling.firstElementChild.innerText} <svg style="position: relative; right: -170px" aria-label="Checkmark filled icon" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Checkmark filled icon</title><path d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5.706 9.21-6.5 6.495a1 1 0 0 1-1.414-.001l-3.5-3.503a1 1 0 1 1 1.414-1.414l2.794 2.796L16.293 8.3a1 1 0 0 1 1.414 1.415Z"></path></svg>`
    newAcc.style.height = "16vh"
    newAcc.style.display = "flex"
    newAcc.style.width = "100%" 
    newAcc.style.alignItems = "center"
    newAcc.style.justifyContent = "flex-start"
    let newLog = document.createElement("p")
    newLog.style.width = "100%"
    newLog.style.height = "7vh"
    newLog.style.display = "flex"
    newLog.style.alignItems = "center"
    newLog.style.justifyContent = "center"
    newLog.innerText = "Log into an Existing Account"
    newLog.className = "new"
    newLog.id = "new"
    newLog.style.fontWeight = "600"
    newLog.style.margin = 0
    newUnfollow.id = "unF"
    let newDiv = document.createElement("div")
    newDiv.className = "unF"
    let newSw = document.createElement("p")
    newDiv.style.padding = 0
    newDiv.style.fontWeight = "600"
    newSw.style.borderBottom = "1px solid rgb(219,219,219)";
    newSw.style.margin = 0 
    newSw.style.height = "7vh"
    newSw.style.alignItems = "center"
    newSw.style.width = "100%"
    newSw.style.display = "flex"
    newSw.style.justifyContent = "center"
    newSw.innerText = "Switch accounts"
    let newX = document.createElement("div")
    newX.style.right = "-120px"
    newDiv.style.borderRadius = "10px"
    newX.style.position = "relative"
    newX.id = "cancel"
    newX.innerHTML = `
    <svg aria-label="Close" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18">
        <title>Close</title>
        <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline>
        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
    </svg>`
    newUnfollow.style.display = "flex"
    newSw.append(newX)
    newDiv.append(newSw,newAcc,newLog)
    newUnfollow.append(newDiv)
    document.body.append(newUnfollow)

    newX.addEventListener("click",() => {
        newUnfollow.style.display = "none"
        newX.id = "cancel"
    })
})

        let new_div = document.createElement("div")


navUl.addEventListener("click",(event) => {
    if (event.target.innerText === "Create") {
        console.log(event.target.innerText);
        let newUnfollow = document.createElement("div")
        let new_div = document.createElement("div")
        let newSw = document.createElement("p")
        let newX = document.createElement("div")
        let newAcc = document.createElement("div") 
        new_div.style.width = "30%"
        newAcc.style.borderTop = "1px #ccc solid" 
        newAcc.style.borderRadius = "0px" 
        newAcc.style.display = "flex"
        newAcc.style.margin = 0
        newAcc.style.padding = "32px"
        newAcc.style.width = "100%" 
        newAcc.style.height = "75vh" 
        newAcc.style.flexDirection = "column"
        newAcc.style.alignItems = "center"
        newAcc.style.justifyContent = "center"    
        newAcc.innerHTML = `
        <svg aria-label="Icon to represent media such as images or videos" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Icon to represent media such as images or videos</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
        <p style="margin-top: 16px;">Drag photos and videos here</p>
        <button style="margin-top: 24px; border-radius: 8px; border: 0; background-color: rgb(24, 119, 242); font-size: 16px; color: #fff; width: 180px; height: 31px;">Select from computer</button>
        `
        let cancel = document.getElementById("cancel")
        newX.style.right = "0"
        newX.style.top = "-10px"
        newX.style.position = "absolute"
        newX.style.display = "flex"
        newX.style.justifyContent = "center"
        newX.style.alignItems = "center"
        newX.id = "cancel"
        newAcc.style.fontSize = "20px"
        newX.innerHTML = `
        <svg aria-label="Close" color="#fff" fill="#fff" height="18" role="img" viewBox="0 0 24 24" width="18">
            <title>Close</title>
            <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
        </svg>`
        newSw.style.margin = 0 
        new_div.style.padding = 0 
        newSw.style.height = "7vh"
        newSw.style.alignItems = "center"
        newSw.style.width = "100%"
        newSw.style.display = "flex"
        newSw.style.justifyContent = "center"
        newSw.innerText = "Create new post"
        newSw.style.fontWeight = 600
        new_div.className = "unF"
        newUnfollow.id = "unF"
        new_div.append(newSw,newX,newAcc)
        newUnfollow.append(new_div)
        document.body.append(newUnfollow)
        
        newX.addEventListener("click",() => {
            newUnfollow.style.display = "none"
            newX.id = "cancel"
        })
    }
    else if (event.target.innerText === "More" && nav.childElementCount == 1) {
        
        new_div.style.display = "block"
        new_div.id = "more_div"
        let new_ul = document.createElement("ul")
        new_ul.id = "more_ul"
        new_ul.innerHTML = `
        <li class="more_li"><svg aria-label="Settings" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Settings</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>Settings</li>
        <li class="more_li"><svg aria-label="Your activity" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Your activity</title><path d="M12 1.505a10.5 10.5 0 1 1-7.424 17.924" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><polyline fill="none" points="8.893 15.108 12 12 12.012 12.012 12.012 5.793" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><circle cx="7.24" cy="2.651" r="1.125"></circle><circle cx="3.515" cy="5.83" r="1.125"></circle><circle cx="1.636" cy="10.353" r="1.125"></circle><circle cx="2.01" cy="15.235" r="1.125"></circle></svg>Your activity</li>
        <li class="more_li"><svg aria-label="Saved" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Saved</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>Saved</li>
        <li class="more_li"><svg aria-label="Keyboard shortcuts" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Keyboard shortcuts</title><path d="M19 1H5C2.794 1 1 2.794 1 5v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4V5c0-2.206-1.794-4-4-4Zm2 18c0 1.103-.897 2-2 2H5c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2v14Z"></path><path d="M16 11c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3v1h-2V8c0-1.654-1.346-3-3-3S5 6.346 5 8s1.346 3 3 3h1v2H8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3v-1h2v1c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3h-1v-2h1Zm-1-3a1 1 0 1 1 1 1h-1V8ZM7 8a1 1 0 0 1 2 0v1H8c-.552 0-1-.449-1-1Zm2 8a1.001 1.001 0 0 1-2 0c0-.551.448-1 1-1h1v1Zm2-5h2v2h-2v-2Zm6 5a1 1 0 0 1-2 0v-1h1c.552 0 1 .449 1 1Z"></path></svg>Keyboard shortcuts</li>
        <li class="more_li"><svg aria-label="Theme icon" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Theme icon</title><path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path></svg>Switch appearance</li>
        <li class="more_li"><svg aria-label="Report a problem" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Report a problem</title><path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path></svg>Report a problem</li>
        <hr style="border: 4px #f9f7f7 solid">
        <li class="more_li">Switch accounts</li>
        <li style="border-top: 1px #ccc solid" class="more_li">Log out</li>
        `
        new_div.append(new_ul)
        nav.append(new_div)
    }
    else if (nav.childElementCount > 1) {
        new_div.innerHTML = ""
        nav.removeChild(new_div)
    }
})