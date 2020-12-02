import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    name: "",
    email: "",
    location: "",
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
    enterLoaction: (state, action) => {
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
    // enterMeasurementWaist: (state, action) => {
    //   state.measurements.waist = action.payload;
    // },
    // enterMeasurementFullHip: (state, action) => {
    //   state.measurements.full_hip = action.payload;
    // },
    // enterMeasurementShoulder: (state, action) => {
    //   state.measurements.shoulder = action.payload;
    // },
    // enterMeasurementInseam: (state, action) => {
    //   state.measurements.inseam = action.payload;
    // },
    // enterMeasurementOutseam: (state, action) => {
    //   state.measurements.outseam = action.payload;
    // },
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
  //   enterBottomNeeds,
  //   enterTopNeeds,
  //   enterCoats_JacketsNeeds,
  //   enterDresses_JumpSuitsNeeds,
  //   enterFootwareNeeds,
  //   enterAccessoriesNeeds,
  //   enterByOutfitNeeds,
  //   enterColorSubNeeds,
  //   enterComments,
  //   enterMaterial,
  //   enterCareInfo,
  enterMeasurement,
  //   enterMeasurementBust,
  //   enterMeasurementFullHip,
  //   enterMeasurementInseam,
  //   enterMeasurementOutseam,
  //   enterMeasurementShoulder,
  enterDyingRestore,
  enterDyingTDBleach,
  enterDyingTDColor,
  enterAddition,
  enterCuttingHem,
  enterNeeds,
} = rootSlice.actions;
