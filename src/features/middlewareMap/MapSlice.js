import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("data/getData", async () => {
  const res = await axios.get(
    "https://geoserver.mapid.io/layers_new/get_layer?api_key=689c2279e0834a3ba82743432605e746&layer_id=628f1d7c84b953e79a7cd896&project_id=611eafa6be8a2635e15c4afc"
  );
  return res.data.geojson.features;
});

const MapSlice = createSlice({
  name: "mapAPI",
  initialState: {
    map: [],
    loading: false,
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.map = action.payload;
    },
  },
});

export default MapSlice.reducer;
