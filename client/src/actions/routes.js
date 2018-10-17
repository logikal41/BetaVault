import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const DELETE_ROUTE = 'DELETE_ROUTE';
export const CLEAR_ROUTES = 'CLEAR_ROUTES';

export const createRoute = (values) => {
  return dispatch => {
  axios.post('/api/routes', values )
    .then( res => {
      // navigate to the new route page
      dispatch({ type: 'SET_ACTIVE_SELECTION', payload: res.data })
      // update the route list
      dispatch({ type: 'ADJOIN_ACTIVE_LIST', payload: res.data  })
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {

      // loop over all the errors and add to the flash message
      let errorMessages = ['Failed to create route! '];
      for ( let key in err.response.data.errors ) {
        errorMessages.push(key + ' ' + err.response.data.errors[key])
      }

      dispatch(setFlash(errorMessages.join(''), 'red'));
    })  
  } 
}

export const deleteRoute = (id) => {
  return dispatch => {
  axios.delete(`/api/routes/${id}`)
    .then( res => {
      dispatch({ type: DELETE_ROUTE, payload: id });
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to delete route', 'red'));
    })  
  } 
}

export const updateRoute = (route, callBack) => {
  return dispatch => {
  axios.put(`/api/routes/${route.id}`, route )
    .then( res => {
      dispatch(setHeaders(res.headers));
      callBack();
    })
    .catch( err => {

      // loop over all the errors and add to the flash message
      let errorMessages = ['Failed to update route! '];
      for ( let key in err.response.data.errors ) {
        errorMessages.push(key + ' ' + err.response.data.errors[key])
      }

      dispatch(setFlash(errorMessages.join(''), 'red'));
    })  
  } 
}