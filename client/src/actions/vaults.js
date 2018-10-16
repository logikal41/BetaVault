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
      dispatch(setFlash('Failed to update vault details!', 'red'));
    })  
  } 
}

export const createVault = (values, callBack) => {

  // failedMessage = (errorList) => {
  //   let messageArray = ['Failed to create vault!']
  //   for ( const key in errorList ) {
  //     messageArray.push( key + ' ' + errorList[key]);
  //   }
  //   return messageArray.join(' ')
  // }

  return dispatch => {
  axios.post('/api/vaults', values )
    .then( res => {
      dispatch(setHeaders(res.headers));
      dispatch(setFlash('Vault has been created.', 'green'))
    })
    .then( () => callBack() )
    .catch( err => {

      // figure out how to loop over the errors object to report any issues and list them 
      // out in the flash message
      // can i use the pluaralize code here for error / errors ??
      const message = 'Failed to create vault! ' + err.response.data.errors.name;
      dispatch(setFlash(message, 'red'));

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