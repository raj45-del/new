// write your JS code here
async function submitContactForm(formData){
    try{const resp=await axios.post("https://formsubmit.co/piyush1376.be23@chitkarauniversity.edu.in",{
        body:{
            name:formData.name,
            email:formData.email,
            message:formData.message
        }
    }, Headers={
          'Content-Type':'application/json'
            })
}
catch(error){
    console.log(`Failed to submit form:${error}`)
}
}