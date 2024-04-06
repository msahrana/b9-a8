// import {useState} from "react";

// const Sort = () => {
//   const data = ["rating", "total_pages"];
//   const [sortState, setSortState] = useState("none");
//   console.log(sortState);

//   return (
//     <div className="main">
//       <select
//         defaultValue={"DEFAULT"}
//         onChange={(e) => setSortState(e.target.value)}
//       >
//         <option value="DEFAULT" disabled>
//           None
//         </option>
//         <option value="ascending">Ascending</option>
//         <option value="descending">Descending</option>
//       </select>
//       <ul>
//         {data.map((el, i) => (
//           <li key={i}>{el}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sort;
