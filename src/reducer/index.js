import { GET_CHARACTERS, GET_SEARCH, PAGINATED, GENDER, SPECIES,STATUS} from '../actions/types';

const initialState = {
  characters: [],
  episodes: [],
  results: [],
  info:[],
  paginated:[],
};

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        paginated: action.payload,
        info: action.info,
      }
      
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
          paginated: action.payload,
          info: action.info
        }
        case SPECIES:
          return{
            ...state,
            paginated: action.payload,
            info: action.info
          }

          case STATUS:
            return{
              ...state,
              paginated: action.payload,
              info: action.info
            }
    default:
      return state;
  }
}
