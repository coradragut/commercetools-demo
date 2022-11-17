import React from "react";
import "./App.css";

//useState
function App() {
  return (
    <div>
      <div className="mg">
        <input placeholder="enter your name" />
      </div>
      <div>
        <p className="mg"></p>
      </div>
    </div>

  );
}

//--------------------------------

//useEffect
// function App() {
//   const [resourceType, setResourceType] = useState("Posts");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//   }, [resourceType])

//   return (
//     <div className="wrapper">
//       <div>
//         <button className="resource" >
//           Posts
//         </button>
//         <button className="resource" >
//           Users
//         </button>
//         <button
//           className="resource"

//         >
//           Comments
//         </button>
//       </div>
//       <h1></h1>
//     </div>
//   );
// }

export default App;
