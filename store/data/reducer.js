import {DELETE_IMAGE, GET_DATA} from "./constains";
import { createStore } from 'redux' ;
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

const initialState = {
        title: '',
        description: '',
        images: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
        case GET_DATA : {
            return {...state, title: action.payload.title, description: action.payload.description, images: [...state.images, ...action.payload.images]}
        }
      case DELETE_IMAGE : {
        return {...state, images: []}
      }
        default:
            return state;
    }
}
const makeStore = (context) => createStore(reducer);

export const wrapper = createWrapper(makeStore, {debug: true});
