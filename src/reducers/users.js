
const init = {
    users: [],
    user: {},
    loading: false,
    error: null
}


const rootReducer = (state = init, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return { ...state, loading: true, error: null };
  
      case 'FETCH_USER_ID':
            return { ...state, loading: true, error: null };

      case 'USERS_SUCCESS':
        return { ...state, loading: false, users: action.payload};
      
      case 'USER_ID_SUCCESS':
        return { ...state, loading: false, user: action.payload};

      case 'USERS_FAILED':
        return { ...state, loading: false, error: action.payload };
  
      case 'USER_ID_FAILED':
        return { ...state, loading: false, error: action.payload };

      default:
        return state;
    }
  };

export default rootReducer;