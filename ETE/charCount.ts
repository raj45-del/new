document.addEventListener("DOMContentLoaded",()=>{
    const postContent = document.getElementById("postContent") as HTMLTextAreaElement
    const charCount = document.getElementById("charCount") as HTMLSpanElement
    const warningMsg = document.getElementById("warningMsg") as HTMLDivElement

    // When the user types in the textarea
    postContent.addEventListener('input', (e)=>{
        let length = postContent.value.length

        if(length>200){
            postContent.value= postContent.value.slice(0, 200);
            warningMsg.textContent="200 words reached"
            length= 200;
        }
        else{
            warningMsg.textContent=""
        }

        // Show the number of characters used
        charCount.textContent = length + '/200'
    })
    
    
})