import axios from 'axios';

export const fetchUsersRequest = () => ({
    type: 'FETCH_USERS'
})

export const fetchUsersIdRequest = () => ({
    type: 'FETCH_USER_ID'
})

export const fetchUsersSuccess = (users) => ({
    type: 'USERS_SUCCESS',
    payload: users
})

export const fetchUsersIdSuccess = (user) => ({
    type: 'USER_ID_SUCCESS',
    payload: user
})

export const fetchUsersFailure = (error) => ({
    type: 'USERS_FAILED',
    payload: error,
})

export const fetchUsersIdFailure = (error) => ({
    type: 'USER_ID_FAILED',
    payload: error,
})

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
    
        // return fetch('https://6581584a3dfdd1b11c4303db.mockapi.io/api/v1/users')
        //   .then((response) => response.json())
        //   .then((data) => {
        //     dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
        //   })
        //   .catch((error) => {
        //     dispatch({ type: 'FETCH_USERS_FAILED', payload: error.message });
        //   });

        return fetch('https://6581584a3dfdd1b11c4303db.mockapi.io/users', {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then((response) => response.json()).then(users => {
            // Do something with the list of tasks
            dispatch(fetchUsersSuccess(users));
            console.log(users);
          }).catch(error => {
            // handle error
            dispatch(fetchUsersFailure(error));
          })
      };

};

// export const fetchUsersId = (id) => {
//     return async (dispatch) => {
//         dispatch(fetchUsersIdRequest());

//         await fetch(`https://6581584a3dfdd1b11c4303db.mockapi.io/users/${id}`, {
//             method: 'GET',
//             headers: {'content-type':'application/json'},
//           }).then((response) => response.json()).then(users => {
//             // Do something with the list of tasks
//             dispatch(fetchUsersIdSuccess(users));
//             // console.log(user);
//           }).catch(error => {
//             // handle error
//             dispatch(fetchUsersIdFailure(error));
//           })
//       };

// };


export const fetchUsersId = (id) => {
  return async (dispatch) => {
    dispatch(fetchUsersIdRequest());

    try {
      const response = await axios.get(`https://6581584a3dfdd1b11c4303db.mockapi.io/users/` + {id});
      const user = response.data;

      dispatch(fetchUsersIdSuccess(user));
    } catch (error) {
      dispatch(fetchUsersIdFailure(error));
    }
  };
};

