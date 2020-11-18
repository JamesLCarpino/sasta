//to be deleted upon transfering to backend and redux

export default function updateAction(state, payload) {
  return {
    ...state,
    details: {
      ...state.details,
      ...payload,
    },
  };
}
