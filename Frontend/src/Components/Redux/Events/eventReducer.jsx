import { NOTE_LOADING, NOTE_FAILURE, NOTE_SUCCESS } from "./eventAction";

const initialStore = {
  isLoading: false,
  isnotes: false,
  notes: [],
  isFailure: false,
};

export const EventReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case NOTE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case NOTE_FAILURE:
      return {
        ...state,
        isFailure: true,
      };
    case NOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFailure: false,
        isnotes: true,
        notes: payload,
      };
    default:
      return state;
  }
};
