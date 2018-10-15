import { SET_ACTIVE_SELECTION } from '../actions/vaults';

const activeSelection = (state = {}, action) => {
    switch (action.type) {
      case SET_ACTIVE_SELECTION:
        return action.payload;
      default:
        return state;
    }
  };

  export default activeSelection;
  