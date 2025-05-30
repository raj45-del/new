import { useState, useEffect } from "react";

function SimpleForm(){

    const [name, setName]= useState("")
    const [submit, setSubmit]= useState("")

    const handleChange=(e)=>{
        setName(e.target.value)
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        
        setSubmit(name)
        setName("")

    }

    return (
        <>

        <input type="text" onChange={handleChange}></input>
        <button id="submit" onClick={handleSubmit}>Submit</button>

        {submit && <p>Submitted: {submit}</p>}

        </>
    )
}

export default SimpleForm