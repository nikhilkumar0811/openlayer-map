// import React, { useState } from "react";
// import MapComponent from "./components/Map";
// import CustomModal from "./components/Modal";
// import { calculateDistances } from "./utils/distanceCalculator";

// function App() {
//   const [coordinates, setCoordinates] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleCoordinatesUpdate = (newCoordinates) => {
//     const distances = calculateDistances(newCoordinates);
//     const data = newCoordinates.map((coord, index) => ({
//       coordinates: coord,
//       distance: distances[index - 1] || 0,
//     }));
//     setCoordinates(data);
//     setModalOpen(true);
//   };

//   return (
//     <div>
//       <button onClick={() => setModalOpen(true)}>Show Modal</button>
//       <MapComponent
//         onCoordinatesUpdate={handleCoordinatesUpdate}
//         drawMode="LineString"
//       />
//       <CustomModal
//         isOpen={modalOpen}
//         onClose={() => setModalOpen(false)}
//         data={coordinates}
//       />
//     </div>
//   );
// }
// export default App;

// import React, { useState } from "react";
// import MapComponent from "./components/Map";
// import CustomModal from "./components/Modal";
// import { calculateDistances } from "./utils/distanceCalculator";

// // Starting Screen Component
// const StartingScreen = ({ onStart }) => {
//   return (
//     <div style={styles.startingScreen}>
//       <div style={styles.navbar}>
//         <div style={styles.missionText}>Mission Creation</div>
//         <button style={styles.closeButton}>X</button>
//       </div>
//       <div style={styles.waypointNav}>Waypoint Navigation</div>
//       <div style={styles.instruction}>
//         Click on the map to mark points of the route and then press Right to
//         complete the route.
//       </div>
//       <button onClick={onStart} style={styles.button}>
//         Generate Data
//       </button>
//     </div>
//   );
// };

// function App() {
//   const [coordinates, setCoordinates] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [showMap, setShowMap] = useState(false);

//   const handleCoordinatesUpdate = (newCoordinates) => {
//     const distances = calculateDistances(newCoordinates);
//     const data = newCoordinates.map((coord, index) => ({
//       coordinates: coord,
//       distance: distances[index - 1] || 0,
//     }));
//     setCoordinates(data);
//     setModalOpen(true);
//   };

//   const handleStart = () => {
//     setShowMap(true); // Show map when "Generate Data" is clicked
//   };

//   return (
//     <div>
//       {!showMap ? (
//         <StartingScreen onStart={handleStart} />
//       ) : (
//         <>
//           <MapComponent
//             onCoordinatesUpdate={handleCoordinatesUpdate}
//             drawMode="LineString"
//           />
//           <CustomModal
//             isOpen={modalOpen}
//             onClose={() => setModalOpen(false)}
//             data={coordinates}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// const styles = {
//   startingScreen: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     backgroundColor: "#f5f5f5",
//   },
//   navbar: {
//     position: "absolute", // Makes the navbar fixed at the top of the screen
//     top: 0,
//     left: 0,
//     right: 0,
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     backgroundColor: "#333",
//     color: "white",
//     zIndex: 1, // Keeps the navbar on top
//   },
//   missionText: {
//     fontSize: "18px",
//   },
//   closeButton: {
//     backgroundColor: "transparent",
//     color: "white",
//     border: "none",
//     fontSize: "20px",
//     cursor: "pointer",
//   },
//   waypointNav: {
//     fontSize: "16px",
//     marginBottom: "10px",
//   },
//   instruction: {
//     fontSize: "16px",
//     marginBottom: "20px",
//     textAlign: "center",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "blue",
//     color: "white",
//     border: "none",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };

// export default App;

import React, { useState } from "react";
import MapComponent from "./components/Map";
import CustomModal from "./components/Modal";
import { calculateDistances } from "./utils/distanceCalculator";

// Starting Screen Component
const StartingScreen = ({ onStart, coordinates }) => {
  // console.log(coo);
  return (
    <div style={styles.startingScreen}>
      <div style={styles.navbar}>
        <div style={styles.missionText}>Mission Creation</div>
        <button style={styles.closeButton}>X</button>
      </div>
      <div style={styles.waypointNav}>Waypoint Navigation</div>
      <div style={styles.instruction}>
        {coordinates.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>WP</th>
                <th>Coordinates</th>
                <th>Distance (meters)</th>
              </tr>
            </thead>
            <tbody>
              {coordinates.map((item, index) => (
                <tr key={index}>
                  <td>WP{index}</td>
                  <td>{item.coordinates.join(", ")}</td>
                  <td>{item.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "Click on the map to mark points of the route and then press Right to complete the route."
        )}
      </div>
      <button onClick={onStart} style={styles.button}>
        Generate Data
      </button>
    </div>
  );
};

// import React, { useState } from "react";
// import MapComponent from "./components/Map";
// import CustomModal from "./components/Modal";
// import { calculateDistances } from "./utils/distanceCalculator";

// Home Component
// const HomePage = ({ coordinates }) => {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>WP</th>
//             <th>Coordinates</th>
//             <th>Distance (meters)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {coordinates.map((item, index) => (
//             <tr key={index}>
//               <td>WP{index}</td>
//               <td>{item.coordinates.join(", ")}</td>
//               <td>{item.distance}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const HomePage = ({ coordinates, onButtonClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        justifyContent: "flex-start",
      }}
    >
      <h1>Imported Coordinates</h1>
      <table
        style={{
          width: "80%",
          borderCollapse: "collapse",
          marginTop: "20px",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>WP</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Coordinates
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Distance (meters)
            </th>
          </tr>
        </thead>
        <tbody>
          {coordinates.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                WP{index}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {item.coordinates.join(", ")}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {item.distance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={onButtonClick}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Perform Action
      </button>
    </div>
  );
};

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showHome, setShowHome] = useState(false); // Track homepage visibility

  const handleCoordinatesUpdate = (newCoordinates) => {
    const distances = calculateDistances(newCoordinates);
    const data = newCoordinates.map((coord, index) => ({
      coordinates: coord,
      distance: distances[index - 1] || 0,
    }));
    setCoordinates(data);
    setModalOpen(true);
  };

  const handleImport = (importedData) => {
    setCoordinates(importedData); // Update coordinates
    setShowHome(true); // Show the homepage
    setModalOpen(false); // Close the modal
  };

  const handleStart = () => {
    setShowMap(true); // Show map when "Generate Data" is clicked
  };

  return (
    <div>
      {showHome ? (
        <HomePage coordinates={coordinates} />
      ) : !showMap ? (
        <StartingScreen onStart={handleStart} coordinates={coordinates} />
      ) : (
        <>
          <MapComponent
            onCoordinatesUpdate={handleCoordinatesUpdate}
            drawMode="LineString"
          />
          <CustomModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            data={coordinates}
            onImport={handleImport} // Pass the handleImport function to the modal
          />
        </>
      )}
    </div>
  );
}

const styles = {
  startingScreen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
    zIndex: 1,
  },
  missionText: {
    fontSize: "18px",
  },
  closeButton: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
  waypointNav: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  instruction: {
    fontSize: "16px",
    marginBottom: "20px",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
  },
};

export default App;
