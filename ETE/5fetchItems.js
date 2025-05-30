// function fetchItem(itemName,delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // const result = `Fetched: ${itemName}`
//             console.log("Fetched", itemName)
//             resolve("Fetched", itemName)
//         }, delay)
//     })
// }

// fetchItem("User", 1000 )
// .then(()=>fetchItem("Posts", 2000))
// .then(()=>fetchItem("Comment", 1500))
// .catch((err)=>console.error("Error fetching items: ", err))

function fetchItem(itemName, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      const message = `Fetched: ${itemName}`;
      console.log(message);
      resolve(message);
    }, delay);
  });
}

fetchItem("User", 1000)
  .then(() => fetchItem("Posts", 2000))
  .then(() => fetchItem("Comments", 1500))
  .catch(error => console.error("Error:", error));



