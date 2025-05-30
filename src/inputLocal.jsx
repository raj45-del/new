import React, {useState, useEffect} from "react";

function PersistentInput(){

    const [text, setText] = useState("")

    useEffect(()=>{
        // const savedName = localStorage.getItem('name')
        if(localStorage.getItem('name')){
            setText(localStorage.getItem('name'))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('name', text)
    }, [text])
    
    const handleName= ((e)=>{
        setText(e.target.value)
    })

    return(
        <>
        Name:{"  "}<input type="text" value={text} onChange={handleName} placeholder="Enter your name"/>
        </>
    )
}

export default PersistentInput