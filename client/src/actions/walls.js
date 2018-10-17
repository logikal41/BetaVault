import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';


export const createWall = ( {id, name, description} , callBack ) => {
  return dispatch => {
  axios.post('/api/walls', { area_id: id, name, description })
    .then( res => {
      dispatch({ type: 'ADJOIN_ACTIVE_LIST', payload: res.data  })
      dispatch(setHeaders(res.headers));
      callBack();
    })
    .catch( err => {

      // loop over all the errors and add to the flash message
      let errorMessages = ['Failed to create wall! '];
      for ( let key in err.response.data.errors ) {
        errorMessages.push(key + ' ' + err.response.data.errors[key])
      }

      dispatch(setFlash(errorMessages.join(''), 'red'));
      callBack();
    })  
  } 
}

export const getWall = id => {
  return dispatch => {
    axios.get(`/api/walls/${id}`)
    .then( res => {
      dispatch({ type: 'SET_ACTIVE_LIST', payload: res.data.routes })
      dispatch({ type: 'SET_ACTIVE_SELECTION', payload: res.data.wall })
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to get wall information!', 'red'));
    })
  }
}

export const deleteWall = (id, callBack) => {
  return dispatch => {
  axios.delete(`/api/walls/${id}`)
    .then( res => {
      dispatch(setHeaders(res.headers));
    })
    .then( () => callBack() )
    .catch( err => {
      dispatch(setFlash('Failed to delete wall!', 'red'));
    })  
  } 
}

export const updateWall = ({id, name, description}, callBack) => {
  return dispatch => {
  axios.put(`/api/walls/${id}`, { name, description })
    .then( res => {
      dispatch(setHeaders(res.headers));
      callBack();
    })
    .catch( err => {

      // loop over all the errors and add to the flash message
      let errorMessages = ['Failed to update wall! '];
      for ( let key in err.response.data.errors ) {
        errorMessages.push(key + ' ' + err.response.data.errors[key])
      }

      dispatch(setFlash(errorMessages.join(''), 'red'));
    })  
  } 
}
