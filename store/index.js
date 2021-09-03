import data from "./data/reducer"
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createWrapper} from 'next-redux-wrapper';
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";


const makeStore = wrapMakeStore(() =>
  createStore(
    combineReducers({data}),
    applyMiddleware(
      nextReduxCookieMiddleware({
        subtrees: ["my.subtree"],
      })
    )
  )
);

export default createWrapper(makeStore, {debug: true})