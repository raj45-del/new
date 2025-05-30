// import { useState, useEffect} from "react";

// function UserProfile(){

//     const [fetchData, setFetchData]= useState([])

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users/1")

//         .then((res)=> res.json())
//         .then((data)=>{
//             console.log(data)
//             setFetchData(data)
//         })
//     },[])
        
//     console.log(fetchData)


//     return(
//         <>
//         {
//         fetchData.length>0 &&
//         fetchData.map((u)=>{
//             return(
//                 <div key={u.id}>
//                     <p> {u.id} Name: {u.name}</p>
//                     <p>Email: {u.email}</p>
//                 </div>
//             )
//         })
//         }
//         </>
//     )
// }
// export default UserProfile


import { useState, useEffect} from "react";

function UserProfile(){

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")

        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setName(data.name)
            setEmail(data.email)
        })
    },[])
        
 


    return(
        <>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        
        </>
    )
}
export default UserProfile