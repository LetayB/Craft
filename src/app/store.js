import { createStore, combineReducers } from "redux";
import { craft } from '../features/craft/craftSlice';

const rootReducer = combineReducers({
  craft,
})


const store = createStore(
  rootReducer
  ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;



