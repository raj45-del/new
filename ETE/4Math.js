function mathOperation(num){
    return new Promise((resolve, rejct)=>{
        
            resolve(num)
        
    })
}

mathOperation(10)
.then(num=>num*3)
.then(num=> num+2)
.then(num=> num/2)
.then(result =>console.log("Final Result: ", result))
.catch(err=>console.log("Error", err))


// Promise.resolve(10)
//   .then(num => num * 3)        // 10 * 3 = 30
//   .then(num => num + 4)        // 30 + 4 = 34
//   .then(num => num / 2)        // 34 / 2 = 17
//   .then(result => console.log("Final result:", result)); // Logs: 17
