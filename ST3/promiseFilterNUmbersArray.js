// write your JS code here// write your JS code here
function getSumOfProperty(arr, property){
    return new Promise((resolve,reject)=>{
       let s=0;
        arr.forEach((val)=>{
            for(let i in val){
                if(property in val){
                    s+=val[i];
                }
                else
                    reject("Property not found in all objects")
                
            }
            
        })
        resolve(s)
    })
    }