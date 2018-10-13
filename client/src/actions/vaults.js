import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const GET_ACTIVE_LIST = 'GET_ACTIVE_LIST';
export const GET_ACTIVE_SELECTION = 'GET_ACTIVE_SELECTION';

export const getVault = () => {
    return dispatch => {
      axios.get('/api/vaults/2') // group 1 is hardcoded since we are only doing this for the san rafael swell at this time
      .then( res => {
        // dispatch({ type: GET_ACTIVE_LIST, payload: res.data.areas })
        dispatch({ type: GET_ACTIVE_SELECTION, payload: res.data.vault })
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to get vault details', 'red'));
      })
    }
  }

  export const updateVault = (vault, callBack) => {
    return dispatch => {
    axios.put(`/api/vaults/${vault.id}`, vault )
      .then( res => {
        dispatch(setHeaders(res.headers));
        callBack();
      })
      .catch( err => {
        dispatch(setFlash('Failed to update vault details', 'red'));
      })  
    } 
  }

  export const createVault = (values, callBack) => {
    return dispatch => {
    axios.post('/api/vaults', values )
      .then( res => {
        dispatch(setHeaders(res.headers));
      })
      .then( () => callBack() )
      .catch( err => {
        dispatch(setFlash('Failed to create Vault', 'red'));
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
        dispatch(setFlash('Failed to delete Vault', 'red'));
      })  
    } 
  }