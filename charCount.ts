document.addEventListener("DOMContentLoaded", ()=>{

    const postContent= document.getElementById("postContent") as HTMLTextAreaElement
    const charCount= document.getElementById("charCount") as HTMLSpanElement
    const warningMsg= document.getElementById("warningMsg") as HTMLDivElement

    const maxChars= 200;

    postContent.addEventListener("input", ()=>{
        let currentLength = postContent.value.length

        if(currentLength>maxChars){
            postContent.value=postContent.value.slice(0, maxChars)
            currentLength= maxChars;
        }

        charCount.textContent= `${currentLength}`;

        if(currentLength>=maxChars){
            warningMsg.textContent=("Limit reahced 200")
        }
        else{
            warningMsg.textContent=""
        }
    })
})