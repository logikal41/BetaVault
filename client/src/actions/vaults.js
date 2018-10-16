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
    return dispatch => {
    axios.post('/api/vaults', values )
      .then( res => {
        dispatch(setHeaders(res.headers));
        dispatch(setFlash('Vault has been created.', 'green'))
      })
      .then( () => callBack() )
      .catch( err => {
        dispatch(setFlash('Failed to create vault!', 'red'));
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