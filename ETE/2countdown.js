function countDown(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(num);
            resolve()
        }, 1000)
    })
}

countDown(3)
.then(()=>countDown(2))
.then(()=>countDown(1))
.then(()=>{
    console.log("Lift off")
})