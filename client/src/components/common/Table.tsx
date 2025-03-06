// "use client";
// import { employees,columns} from './dummydata/empdata'


// const Table = () => {

//   return (
//     <div className="rounded-md border m-3">
//       <table className="min-w-full table-auto border-collapse">
//         <thead>
//           <tr>
//             {columns.map((col, index) => (
//               <th key={index} className="px-4 py-2 border-b">
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {employees.length ? (
//             employees.map((employee) => (
//               <tr key={employee.id}>
//                 <td className="px-4 py-2 border-b">{employee.id}</td>
//                 <td className="px-4 py-2 border-b">{employee.first_name}</td>
//                 <td className="px-4 py-2 border-b">{employee.last_name}</td>
//                 <td className="px-4 py-2 border-b">{employee.email}</td>
//                 <td className="px-4 py-2 border-b">{employee.phone}</td>
//                 <td className="px-4 py-2 border-b">{employee.position}</td>
//                 <td className="px-4 py-2 border-b">{employee.department}</td>
//                 <td className="px-4 py-2 border-b">{employee.salary}</td>
//                 <td className="px-4 py-2 border-b">{employee.address}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={columns.length} className="px-4 py-2 text-center">
//                 No employees found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
