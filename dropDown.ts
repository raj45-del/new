document.addEventListener("DOMContentLoaded",()=>{
    const countrySelect= document.getElementById("countrySelect") as HTMLSelectElement
    const selectedCountry= document.getElementById("selectedCountry") as HTMLSpanElement

    countrySelect.addEventListener("change",()=>{
        const selectedValue= countrySelect.value

        if(selectedValue){
            selectedCountry.textContent= selectedValue
        }
        else{
            selectedCountry.textContent="None"
        }
    })
})


