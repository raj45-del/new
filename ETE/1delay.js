// write your JS code here
function wait(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Delayed successful")
        },ms)
    })
}
wait(2000)
.then(ok=>{
    console.log("waited for 2 sec", ok)
})