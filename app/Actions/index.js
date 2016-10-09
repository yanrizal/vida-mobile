
export function fetchProfile(data) {
  return {
    type: 'GET_PROFILE_FETCH'
  }
}

export function getProfile(data) {
  return {
    type: 'GET_PROFILE_SUCCESS',
    data: data
  }
}