import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const deleteArea = (id, callBack) => {
  return dispatch => {
  axios.delete(`../api/areas/${id}`)
    .then( res => {
      dispatch(setHeaders(res.headers));
    })
    .then( () => callBack() )
    .catch( err => {
      dispatch(setFlash('Failed to delete Area', 'red'));
    })  
  } 
}

export const updateArea = ({id, name, description}, callBack) => {
  return dispatch => {
  axios.put(`/api/areas/${id}`, { name, description })
    .then( res => {
      dispatch(setHeaders(res.headers));
      callBack();
    })
    .catch( err => {

      // loop over all the errors and add to the flash message
      let errorMessages = ['Failed to update area! '];
      for ( let key in err.response.data.errors ) {
        errorMessages.push(key + ' ' + err.response.data.errors[key])
      }

      dispatch(setFlash(errorMessages.join(''), 'red'));

    })  
  } 
}

export const createArea = ({name, description}, vault_id) => {
  return dispatch => {
  axios.post('/api/areas', { vault_id, name, description })
    .then( res => {
      dispatch({ type: 'ADJOIN_ACTIVE_LIST', payload: res.data  })
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {

      // loop over all the errors and add to the flash message
      let errorMessages = ['Failed to create area! '];
      for ( let key in err.response.data.errors ) {
        errorMessages.push(key + ' ' + err.response.data.errors[key])
      }

      dispatch(setFlash(errorMessages.join(''), 'red'));
    })  
  } 
}