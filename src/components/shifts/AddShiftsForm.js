// import React from 'react'
// import { Table } from "react-bootstrap";
// import { useSelector } from "react-redux";

// import { Link } from "react-router-dom";

// export const AddShiftsForm = () => {
//     const { shiftList, isLoading, error } = useSelector(
//         (state) => state.timesheet
//       )
//     return (
//     //     <Table striped bordered hover>
//     //   <thead>
//     //     <tr>
//     //       <th>#</th>
//     //       <th>Name</th>
//     //       <th>shift Date and Time</th>
//     //     </tr>
//     //   </thead>
//     //   <tbody>
//     //     {shiftList.length ? (
//     //       shiftList.map((row) => (
//     //         <tr key={row._id}>
//     //           <td>{row._id}</td>
//     //           <td>
//     //             <Link to={`/shifts/${row._id}`}>{row.name}</Link>
//     //           </td>
//     //           <td>{row.datetime}</td>
//     //           {/* <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td> */}
//     //         </tr>
//     //       ))
//     //     ) : (
//     //       <tr>
//     //         <td colSpan="3" className="text-center">
//     //           No shifts to show{" "}
//     //         </td>
//     //       </tr>
//         )}
//     //   </tbody>
//     // </Table>
//     )
// }
