import React, { useState, useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import { Draw } from "ol/interaction";

const MapComponent = ({ onCoordinatesUpdate, drawMode }) => {
  const [map, setMap] = useState(null); // Store the map instance
  const [drawInteraction, setDrawInteraction] = useState(null); // Store the draw interaction

  useEffect(() => {
    if (!map) {
      // Initialize the map
      const initialMap = new Map({
        target: "map-container", // Assign the map to an element with this ID
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });

      setMap(initialMap); // Store the map instance
    }

    // Cleanup on component unmount
    return () => {
      if (map) {
        map.setTarget(null); // Remove the map instance from the DOM
        setMap(null); // Clear the map instance from state
      }
    };
  }, [map]);

  useEffect(() => {
    if (map && drawMode) {
      const newDrawInteraction = new Draw({
        type: drawMode,
      });

      newDrawInteraction.on("drawend", (event) => {
        const coordinates = event.feature.getGeometry().getCoordinates();
        onCoordinatesUpdate(coordinates); // Pass the coordinates to the parent component
      });

      map.addInteraction(newDrawInteraction);
      setDrawInteraction(newDrawInteraction); // Store the draw interaction

      // Cleanup if the drawMode changes or component unmounts
      return () => {
        map.removeInteraction(newDrawInteraction);
        setDrawInteraction(null); // Reset the draw interaction state
      };
    }
  }, [map, drawMode, onCoordinatesUpdate]);

  return (
    <div
      id="map-container"
      style={{ width: "100%", height: "200vh" }} // Map container
    />
  );
};

export default MapComponent;
