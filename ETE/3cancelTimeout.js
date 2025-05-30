function delayedMessage(message, ms, shouldCancel){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(shouldCancel){
                reject("Operation Cancelled")
            }
            else{
                resolve("Operation successful")
            }
        }, ms)

    })
}
delayedMessage("Hello after 2 sec", 2000, false)
.then(msg=>console.log("Resolved: ", msg))
.catch(err=> console.log("Rejected:", err))


delayedMessage("Hello after 2 sec", 2000, true)
.then(msg=>console.log("Resolved: ", msg))
.catch(err=> console.error("Rejected:", err))