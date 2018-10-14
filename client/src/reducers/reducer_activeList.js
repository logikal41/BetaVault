import { GET_ACTIVE_LIST } from '../actions/vaults';
// import { DELETE_ROUTE } from '../actions/routes';

const activeList = (state = [], action) => {
    switch (action.type) {
      case GET_ACTIVE_LIST:
        return action.payload;
      // case DELETE_ROUTE:
      //   return state.filter( route => route.id !== action.payload );
    //   case CLEAR_ROUTES:
    //     return [];
      case 'ADJOIN_ACTIVE_LIST':
        return [...state, action.payload];
    //   case UPDATE_ROUTE:
    //     const originalState = state.filter(route => route.id !== route.payload.id);
    //     return [ action.area, ...originalState];
      default:
        return state;
    }
  };

  export default activeList;
  