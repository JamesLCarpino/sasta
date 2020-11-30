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
    enterBottomNeeds: (state, action) => {
      state.needs.bottoms = action.payload;
    },
    enterTopNeeds: (state, action) => {
      state.needs.tops = action.payload;
    },
    enterCoats_JacketsNeeds: (state, action) => {
      state.needs.coats_jackets = action.payload;
    },
    enterDresses_JumpSuitsNeeds: (state, action) => {
      state.needs.dresses_jumpsuits = action.payload;
    },
    enterFootwareNeeds: (state, action) => {
      state.needs.footwear = action.payload;
    },
    enterAccessoriesNeeds: (state, action) => {
      state.needs.accessories = action.payload;
    },
    enterByOutfitNeeds: (state, action) => {
      state.needs.by_outfit = action.payload;
    },
    enterColorSubNeeds: (state, action) => {
      state.needs.color_sub = action.payload;
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
    enterMeasurementBust: (state, action) => {
      state.measurements.bust = action.payload;
    },
    enterMeasurementWaist: (state, action) => {
      state.measurements.waist = action.payload;
    },
    enterMeasurementFullHip: (state, action) => {
      state.measurements.full_hip = action.payload;
    },
    enterMeasurementShoulder: (state, action) => {
      state.measurements.shoulder = action.payload;
    },
    enterMeasurementInseam: (state, action) => {
      state.measurements.inseam = action.payload;
    },
    enterMeasurementOutseam: (state, action) => {
      state.measurements.outseam = action.payload;
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
export const reducder = rootSlice.reducer;

export const {
  enterName,
  enterEmail,
  enterBottomNeeds,
  enterTopNeeds,
  enterCoats_JacketsNeeds,
  enterDresses_JumpSuitsNeeds,
  enterFootwareNeeds,
  enterAccessoriesNeeds,
  enterByOutfitNeeds,
  enterColorSubNeeds,
  enterComments,
  enterMaterial,
  enterCareInfo,
  enterMeasurementBust,
  enterMeasurementFullHip,
  enterMeasurementInseam,
  enterMeasurementOutseam,
  enterMeasurementShoulder,
  enterDyingRestore,
  enterDyingTDBleach,
  enterDyingTDColor,
  enterAddition,
  enterCuttingHem,
} = rootSlice.actions;
