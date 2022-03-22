import { GET_CHARACTERS, GET_EPISODES, GET_SEARCH, INFO, PAGINATED, GENDER, SPECIES,STATUS} from '../actions/types';

const initialState = {
  characters: [],
  episodes: [],
  results: [],
  info:[],
  gender:[],
  status:[],
  species:[],
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
        info: action.info,
        results: action.results,
      };
      
      case GET_SEARCH:
      return {
        ...state,
        characters: action.payload,
        paginated: action.payload,
        info: action.info,
      };
      case PAGINATED:
      return {
        ...state,
        paginated: action.payload,
        characters: action.payload,
        info: action.info,
      };
      case GENDER:
        return{
          ...state,
          gender: action.payload
        }
        case SPECIES:
          return{
            ...state,
            species: action.payload
          }

          case STATUS:
            return{
              ...state,
              status: action.payload
            }
    default:
      return state;
  }
}
