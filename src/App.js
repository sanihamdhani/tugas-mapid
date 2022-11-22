import Brightness7Icon from "@mui/icons-material/Brightness7";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-floating-action-button";
import { useDispatch, useSelector } from "react-redux";
import MarkerData from "../src/components/Marker";
import "./App.css";
import "./css/style.css";
import { getData } from "./features/middlewareMap/MapSlice";
function App() {
  const { map } = useSelector((state) => state.map);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    console.log(dataFilter);
  }, []);
  const [styleId, setStyleId] = useState("light");
  const [dataFilter, setDataFilter] = useState([]);
  const [viewport, setViewport] = useState({
    geometry: {
      type: "Polygon",
      coordinates: [-6.2, 106.816666],
    },
    latitude: -6.2,
    longitude: 106.816666,
    zoom: 5,
  });

  const themeMap = () => {
    styleId === "light" ? setStyleId("dark") : setStyleId("light");
  };
  // const token =
  //   "";
  const styles = {
    light: "mapbox://styles/mapbox/light-v9",
    dark: "mapbox://styles/mapbox/dark-v10",
  };

  return (
    <React.Fragment>
      <Container className="btn">
        <Button
          onClick={() => setDataFilter("Merah")}
          styles={{
            backgroundColor: "#89CFF0",
            color: "#fff",
            fontSize: "10px",
          }}
        >
          Merah
        </Button>
        <Button
          onClick={() => setDataFilter("Kuning")}
          styles={{
            backgroundColor: "#89CFF0",
            color: "#fff",
            fontSize: "10px",
          }}
        >
          Kuning
        </Button>
        <Button
          onClick={() => setDataFilter("Hijau")}
          styles={{
            backgroundColor: "#89CFF0",
            color: "#fff",
            fontSize: "10px",
          }}
        >
          Hijau
        </Button>

        <Button styles={{ backgroundColor: "#89CFF0" }}>
          <FilterAltIcon />
        </Button>
      </Container>

      <Map
        style={{ width: "100%", height: "100vh" }}
        mapStyle={styles[styleId]}
        accessToken={process.env.REACT_APP_MAP_KEY}
        onViewportChange={setViewport}
        zoom={viewport.zoom}
        {...viewport}
      >
        {map.map((datas, index) => {
          return (
            <MarkerData
              key={index}
              longitude={datas.geometry.coordinates[0]}
              latitude={datas.geometry.coordinates[1]}
              data={datas}
              status={dataFilter}
            ></MarkerData>
          );
        })}
        <FullscreenControl />

        <GeolocateControl position="top-right" />
        <NavigationControl showCompass showZoom position="top-right" />
      </Map>
      <Button
        className="btn-mode"
        onClick={themeMap}
        styles={{ backgroundColor: "#89CFF0" }}
      >
        <Brightness7Icon />
      </Button>
    </React.Fragment>
  );
}

export default App;
