import axios from 'axios';
import axiosImproved from '../axios';
import * as types from './actionTypes';

export function addFriend(name, age, email) {
    return {
      type: types.ADD_FRIEND,
      payload: {
        name,
        age,
        email
      },
    };
  }

  export function addFriends(friends) {
    return {
      type: types.ADD_FRIENDS,
      payload: friends,
    };
  }


  export const fetchFriends = () => dispatch => {
    axiosImproved().get('http://localhost:5000/api/friends')
      .then(res => {
        dispatch(addFriends(res.data)); 
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  export const postNewFriend = (friend) => dispatch => {
    axios.post('http://localhost:7000/api/friends', friend)
      .then(res => {
        dispatch(fetchFriends());
      })
      .catch(error => {
        console.log(error.message);
      });
  };


  export const login = (username, password) => dispatch => {
    const credentials = { username, password };
  
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
      .catch(res => {
        console.log('AUTH FAILED!!!');
        // turn off spinners
        // set some error on the jsx
        // so user can tell something went wrong
      })
      .finally(() => {
      })
  };