
const initialState = {
  data: [],
  isLoading: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD':
      return
    default:
      return state
  }
}