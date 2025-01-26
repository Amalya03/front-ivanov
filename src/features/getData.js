import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(
    "https://cloud.codesupply.co/endpoint/react/data.json"
  );
  return response.data;
});
