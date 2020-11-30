import {
  //CONTACT reducers
  POST_CONTACT_START,
  POST_CONTACT_SUCCESS,
  POST_CONTACT_FAILED,
} from "../actions";

const initialState = {
  contact: [],
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
};
export const sastaReducers = (state = initialState, action) => {
  switch (action.type) {
    case POST_CONTACT_START:
      return {
        ...state,
        loading: true,
      };
    case POST_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
      };
    default:
      return state;
  }
};
