import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';


export const createWall = ( {id, user_id, name, description} ) => {
  return dispatch => {
  axios.post('/api/walls', { area_id: id, user_id, name, description })
    .then( res => {
      dispatch({ type: 'ADJOIN_ACTIVE_LIST', payload: res.data  })
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {

      // loop over all the errors and add to the flash message
      let errorMessages = ['Failed to create wall! '];
      for ( let key in err.response.data.errors ) {
        errorMessages.push(key + ' ' + err.response.data.errors[key])
      }

      dispatch(setFlash(errorMessages.join(''), 'red'));
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
