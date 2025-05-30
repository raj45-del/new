import { useState, useEffect } from "react";
function ToggleMessage(){
    const [Visible, setVisible] = useState(false);

    const handleToggle= ()=>{
        if(Visible===true){
            setVisible(false)
        }
        else{
            setVisible(true)
            
        }
    }

    let message = null;
    if(Visible===true){
        message=<p>Hello, This is message!</p>
    }


    return (
        <>
        
        <button id="click" onClick={handleToggle}>Show/Hide Message</button>
        
        {/* {Visible ? (
            <p>Hello, This is message!</p>
        ):  null} */}
        {message}
       
        </>
    )
}

export default ToggleMessage