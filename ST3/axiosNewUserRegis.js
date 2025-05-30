// write your JS code here
async function registerUser(userData){
    try{ const resp=await axios.post("https://jsonplaceholder.typicode.com/users",{
         body:{
             name:userData.name,
             email:userData.email,
             pass:userData.pass
         },
         Headers:{
             'Content-Type':'application/json'
         }
     })
     const data=resp.data
       console.log(`User registered successfully:${resp.data.body.name}`)}
     catch(error){
         console.log(`Registration failed:${error} message`)
     }
     
 }