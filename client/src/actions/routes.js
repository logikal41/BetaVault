import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const SELECT_ROUTE = 'SELECT_ROUTE';
export const GET_ROUTES = 'GET_ROUTES';
export const DELETE_ROUTE = 'DELETE_ROUTE';
export const CLEAR_ROUTES = 'CLEAR_ROUTES';

export const selectRoute = (id) => {
    return dispatch => {
      dispatch({ type: SELECT_ROUTE, payload: id });
    }
  }

export const getRoutes = (wall_id) => {
  return dispatch => {
    axios.get(`/api/walls/${wall_id}`)
      .then( res => {
        dispatch({ type: GET_ROUTES, payload: res.data.routes });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to get routes', 'red'));
      })
    }
}

export const createRoute = (values, callBack) => {
  return dispatch => {
  axios.post('/api/routes', values )
    .then( res => {
      dispatch({ type: 'ADJOIN_ACTIVE_LIST', payload: res.data  })
      dispatch(setHeaders(res.headers));
    })
    .then( () => callBack() )
    .catch( err => {
      dispatch(setFlash('Failed to create route!', 'red'));
      callBack();
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
      dispatch(setFlash('Failed to update route', 'red'));
    })  
  } 
}