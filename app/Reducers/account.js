const defaultState = {
  message: '',
  profile: {
    name: '',
    picture: {
      data : {
        url: ''
      }
    }
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_PROFILE_SUCCESS':
      return {
        ...state,
        profile: action.data,
        message: 'success'
      }; 
    case 'GET_PROFILE_FETCH':
      return {
        ...state,
        message: 'fetch'
      }; 
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        message: ''
      };
    default:
      return state;
  }
}
