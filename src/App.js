import React from "react";
import "./App.css";

//useState
function App() {
  return (
    <div>
      <div className="mg">
        <input type="text" placeholder="enter your name" />
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

//   return (
//     <div className="wrapper">
//       <div>
//         <button className="resource" onClick={()=>setResourceType('Posts')}>Posts</button>
//         <button className="resource" onClick={()=>setResourceType('Users')}>Users</button>
//         <button className="resource" onClick={()=>setResourceType('Comments')}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//     </div>
//   );
// }

export default App;
