

export const fetchUsersRequest = () => ({
    type: 'FETCH_USERS'
})

export const fetchUsersSuccess = (users) => ({
    type: 'USERS_SUCCESS',
    payload: users
})

export const fetchUsersFailure = (error) => ({
    type: 'USERS_FAILED',
    payload: error,
})

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_USERS' });
    
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
            dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
            console.log(users);
          }).catch(error => {
            // handle error
            dispatch({ type: 'FETCH_USERS_FAILED', payload: error.message });
          })
      };

};