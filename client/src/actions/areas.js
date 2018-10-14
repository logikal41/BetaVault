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

export const getArea = id => {
  return dispatch => {
    axios.get(`/api/areas/${id}`)
    .then( res => {
      dispatch({ type: 'GET_ACTIVE_LIST', payload: res.data.walls })
      dispatch({ type: 'GET_ACTIVE_SELECTION', payload: res.data.area })
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to get area information', 'red'));
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
      dispatch(setFlash('Failed to update area', 'red'));
    })  
  } 
}

export const createArea = ({name, description}, vault_id, callBack) => {
  return dispatch => {
  axios.post('/api/areas', { vault_id, name, description })
    .then( res => {
      debugger
      dispatch(setHeaders(res.headers));
      callBack();
    })
    .catch( err => {
      dispatch(setFlash('Failed to create area', 'red'));
    })  
  } 
}