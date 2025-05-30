import { useState, useEffect } from "react";

function TextInputDisplay(){
    const [Input, setInput]= useState("") 

    const handelDisplay= (e)=>{
        setInput(e.target.value)
    }

    return(
        <>
        <input type="text" value={Input} onChange={handelDisplay}/>
        <p>You typed: {Input}</p>
        </>
    )

}

export default TextInputDisplay