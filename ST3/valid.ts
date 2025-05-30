document.addEventListener("DOMContentLoaded", ()=>{
    const ageInput = document.getElementById("ageInput") as HTMLInputElement
    const errorMsg= document.getElementById("errorMsg") as HTMLDivElement

    ageInput.addEventListener("input",()=>{
        const value= ageInput.value

        const isNumeric = /^\d+$/.test(value);

        if(!isNumeric){
            errorMsg.textContent="Enter digits only"
            return;
        }
        const age = Number(value);
            if(age>=18 && age<=40){
                errorMsg.textContent=""
            }
            else{
                errorMsg.textContent="Age must be between 18 to 40 "
            }
        
    })
})