
const init = {
    users: [],
    loading: false,
    error: null
}


const rootReducer = (state = init, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return { ...state, loading: true, error: null };
  
      case 'FETCH_USERS_SUCCESS':
        return { ...state, loading: false, users: action.payload };
  
      case 'FETCH_USERS_FAILURE':
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

export default rootReducer;