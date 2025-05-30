import { useState, useEffect } from "react";

function CharacterCounter(){

    const [input, setInput]= useState("")

    const handleCount= (e)=>{
        setInput(e.target.value.length)
        

    }

    return(
        <>
        <textarea onChange={handleCount}></textarea>
        <p>Character count: {input}</p>
        </>
    )
}

export default CharacterCounter