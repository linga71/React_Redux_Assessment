import action_Types from '../actions/actionTypes';
const INITIAL_STATE = {
  result: [],
  error : null,

}
const Pokemonreducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case action_Types.SET_DROPDOWN_VALUES:
      return {
        ...state,
        result: payload,
        error:null,
      };

      case action_Types.error_msg:
        return {
          ...state,
          error: payload,
        };
    
    default:
      return state;
  }
};

export default Pokemonreducer;