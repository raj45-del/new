import { useState, useEffect } from "react";

function ClickTracker(){

    const [count, setCount] = useState(0)

    const handelClick = ()=>{
        setCount(count+1);

    }



    return(
        <>
        <button onClick={handelClick}>Click me</button>
        <p>Clicked: {count}</p>

        </>
    )
}

export default ClickTracker