import React, {useState, useEffect} from "react";

function PostsFetcher(){

    const [post, setPost] = useState([])
    const [shouldFetch, setShouldFetch] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect (()=>{
        if(shouldFetch){
            setLoading(true)
            fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res)=>res.json())
            .then((data)=>{
            console.log(data)
            setPost(data)
            setLoading(false)
        })
        }
    }, [shouldFetch])

    const handleClick = (()=>{
        setShouldFetch(true)
    })


    return(
        <>
        <button onClick={handleClick}> Load Posts</button>
        {loading && <p>Loading... </p>}
        <ul>
            {post.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </>
    )
}

export default PostsFetcher



// import React, { useState } from "react";

// function PostsFetcher() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleClick = () => {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         setPosts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Load Posts</button>
//       {loading && <p>Loading...</p>}
//       <ul>
//         {posts.map((p) => (
//           <li key={p.id}>{p.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostsFetcher;
