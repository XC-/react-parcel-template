import { fromJS } from "immutable";

import { SET_NAME } from "./actions";

function getInitialState() {
  return fromJS({
    name: "Za Warudo!"
  })
}

export function Example(state = getInitialState(), action) {
  switch (action.type) {
    case SET_NAME:
      return state.set("name", action.payload);
    default:
      return state;
  }
}
