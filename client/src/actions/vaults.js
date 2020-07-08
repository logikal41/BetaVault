import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST';
export const SET_ACTIVE_SELECTION = 'SET_ACTIVE_SELECTION';

export const updateVault = (vault, callBack) => {
  return dispatch => {
  axios.put(`/api/vaults/${vault.id}`, vault )
    .then( res => {
      dispatch(setHeaders(res.headers));
      callBack();
    })
    .catch( err => {
      
      // loop over all the errors and add to the flash message
      let errorMessages = ['Failed to update vault! '];
      for ( let key in err.response.data.errors ) {
        errorMessages.push(key + ' ' + err.response.data.errors[key])
      }

      dispatch(setFlash(errorMessages.join(''), 'red'));
    })  
  } 
}

export const createVault = (values, user_id, callBack) => {

  return dispatch => {
  axios.post('/api/vaults', {user_id, ...values} )
    .then( res => {
      dispatch(setHeaders(res.headers));
      dispatch(setFlash('Vault has been created.', 'green'))
    })
    .then( () => callBack() )
    .catch( err => {

      // loop over all the errors and add to the flash message
      let errorMessages = ['Failed to create vault! '];
      for ( let key in err.response.data.errors ) {
        errorMessages.push(key + ' ' + err.response.data.errors[key])
      }

      dispatch(setFlash(errorMessages.join(''), 'red'));

    })  
  } 
}

export const deleteVault = (id, callBack) => {
  return dispatch => {
  axios.delete(`/api/vaults/${id}`)
    .then( res => {
      dispatch(setHeaders(res.headers));
    })
    .then( () => callBack() )
    .catch( err => {
      dispatch(setFlash('Failed to delete vault!', 'red'));
    })  
  } 
}