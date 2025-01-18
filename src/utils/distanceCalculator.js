import { distance } from "@turf/turf";

export const calculateDistances = (coordinates) => {
  const distances = [];
  for (let i = 1; i < coordinates.length; i++) {
    distances.push(
      distance(coordinates[i - 1], coordinates[i], { units: "meters" })
    );
  }
  return distances;
};
