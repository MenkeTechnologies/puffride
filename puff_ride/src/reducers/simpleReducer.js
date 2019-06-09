/* 
  src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    default:
      return {
        status: "not logged in",
        email: '',
        password: '',
      }
  }
}
