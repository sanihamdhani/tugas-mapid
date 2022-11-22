import { Button } from "@mui/material";
import { Marker, Popup } from "@urbica/react-map-gl";
import React, { Component } from "react";
import FilterData from "./FilterData";

export default class MarkerData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PopupInfo: null,
    };
  }
  render() {
    const PopupInfo = this.state.PopupInfo;

    return (
      <React.Fragment>
        <Marker
          key={this.props.index}
          longitude={this.props.longitude}
          latitude={this.props.latitude}
          onClick={() => this.setState({ PopupInfo: this.props.data })}
        >
          <Button>
            <FilterData
              id={this.props.data.key}
              data={this.props.data}
              status={this.props.status}
            />
          </Button>
          {PopupInfo ? (
            <Popup
              longitude={this.props.longitude}
              latitude={this.props.latitude}
              closeOnClick={false}
            >
              <h3>Nama : {PopupInfo.properties.Nama}</h3>
              <h3>Status : {PopupInfo.properties.Status}</h3>
              <h3>Angka : {PopupInfo.properties.Angka}</h3>
            </Popup>
          ) : null}
        </Marker>
      </React.Fragment>
    );
  }
}
