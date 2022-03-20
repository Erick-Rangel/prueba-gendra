import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS, GET_SEARCH, GET_NEXT, GET_PREV, GET_SEARCH_EPISODES} from '../actions/types';

const initialState = {
  characters: [],
  locations: [],
  episodes: [],
  next:[],
  prev:[],
};

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        next: action.next,
        prev: action.prev,
      };

    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
        next: action.next,
        prev: action.prev,
      };

    case GET_SEARCH_EPISODES:
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

      
    default:
      return state;
  }
}
