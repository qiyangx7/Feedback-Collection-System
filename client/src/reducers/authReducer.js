import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  // log every single action that this reducer gets called with
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // if action.payload is an empty string, return false
    default:
      return state;
  }
}
