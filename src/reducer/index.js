import { GET_CHARACTERS, GET_EPISODES, GET_SEARCH, GET_NEXT, GET_PREV, INFO, PAGINATED} from '../actions/types';

const initialState = {
  characters: [],
  episodes: [],
  next:[],
  prev:[],
  info:[],
  paginated:[],
};

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        next: action.next,
        prev: action.prev,
        info: action.info,
      };

    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
        next: action.next,
        prev: action.prev,
      };
      
      case GET_SEARCH:
      return {
        ...state,
        characters: action.payload,
        paginated: action.payload,
        next: action.next,
        prev: action.prev
      };
      case GET_NEXT:
      return {
        ...state,
        characters: action.payload,
        next: action.next,
        prev: action.prev
      };
      case GET_PREV:
      return {
        ...state,
        characters: action.payload,
        next: action.next,
        prev: action.prev
      };

      case  INFO:
      return {
        ...state,
        info: action.payload
      };
      case PAGINATED:
      return {
        ...state,
        paginated: action.payload
      };
      
    default:
      return state;
  }
}
