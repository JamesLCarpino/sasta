import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    name: "",
    email: "",
    location: {
      city: "",
      state: "",
      zip_code: null,
      country: "",
    },
    needs: {
      bottoms: [],
      tops: [],
      coats_jackets: [],
      dresses_jumpsuits: [],
      footwear: [],
      accessories: [],
      by_outfit: [],
      color_sub: "",
    },
    image: null,
    comments: "",
    material: "",
    care_info: "",
    measurements: {
      bust: null,
      waist: null,
      full_hip: null,
      shoulder: null,
      inseam: null,
      outseam: null,
    },

    dying: {
      restore: false,
      tie_dye_color: false,
      tie_dye_bleach: false,
    },
    addition: "",
    cuttingHemming: "",
    loading: false,
  },

  reducers: {
    enterName: (state, action) => {
      state.name = action.payload;
    },
    enterEmail: (state, action) => {
      state.email = action.payload;
    },
    enterLocation: (state, action) => {
      state.location = action.payload;
    },
    enterNeeds: (state, action) => {
      state.needs = action.payload;
    },
    enterComments: (state, action) => {
      state.comments = action.payload;
    },
    enterMaterial: (state, action) => {
      state.material = action.payload;
    },
    enterCareInfo: (state, action) => {
      state.care_info = action.payload;
    },
    enterMeasurements: (state, action) => {
      state.measurements = action.payload;
    },
    enterMeasurementBust: (state, action) => {
      state.measurements.bust = action.payload;
    },
    enterDyingRestore: (state, action) => {
      state.dying.restore = action.payload;
    },
    enterDyingTDColor: (state, action) => {
      state.dying.tie_dye_color = action.payload;
    },
    enterDyingTDBleach: (state, action) => {
      state.dying.restore = action.payload;
    },
    enterAddition: (state, action) => {
      state.addition = action.payload;
    },
    enterCuttingHem: (state, action) => {
      state.cuttingHemming = action.payload;
    },
  },
});
export const reducer = rootSlice.reducer;

export const {
  enterName,
  enterEmail,
  enterLocation,
  enterMeasurement,
  enterDyingRestore,
  enterDyingTDBleach,
  enterDyingTDColor,
  enterAddition,
  enterCuttingHem,
  enterNeeds,
} = rootSlice.actions;
