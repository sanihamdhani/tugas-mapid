import { Source, Layer, Filter } from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import React, { Component } from "react";

export class FilterData extends Component {
  render() {
    return (
      <div>
        <Source id={this.props.id} type="geojson" data={this.props.data} />
        <Layer
          id={this.props.id}
          type="circle"
          source={this.props.id}
          paint={{
            "circle-color": [
              "match",
              ["get", "Status"],
              "Merah",
              "#FF0000",
              "Hijau",
              "#008000",
              "Kuning",
              "#FFFF00",
              "#1B659D",
            ],

            "circle-radius": 5,
          }}
        />

        <Filter
          layerId={this.props.id}
          filter={["==", "Status", this.props.status]}
        />
      </div>
    );
  }
}

export default FilterData;
