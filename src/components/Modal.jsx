// import React from "react";
// import Modal from "react-modal";

// const CustomModal = ({ isOpen, onClose, data }) => (
//   <Modal
//     style={{
//       content: {
//         width: "32%",
//         height: "70%",
//       },
//     }}
//     isOpen={isOpen}
//     onRequestClose={onClose}
//   >
//     <h2>Coordinates</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>WP</th>
//           <th>Coordinates</th>
//           <th>Distance (meters)</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, index) => (
//           <tr key={index}>
//             <td>WP{index}</td>
//             <td>{item.coordinates.join(", ")}</td>
//             <td>{item.distance}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     <button onClick={onClose}>Close</button>
//   </Modal>
// );

// export default CustomModal;

import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const CustomModal = ({ isOpen, onClose, data, onImport }) => {
  const handleImport = () => {
    onImport(data); // Pass data back to App component
    onClose(); // Close the modal
  };

  return (
    <Modal
      style={{
        content: {
          width: "32%",
          height: "70%",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <h2>Polygon Tool</h2>
      <table>
        <thead>
          <tr>
            <th>WP</th>
            <th>Coordinates</th>
            <th>Distance (meters)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>WP{index}</td>
              <td>{item.coordinates.join(", ")}</td>
              <td>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleImport}>Import points</button>
    </Modal>
  );
};

export default CustomModal;
