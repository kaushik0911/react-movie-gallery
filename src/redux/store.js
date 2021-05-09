import { applyMiddleware, createStore } from 'redux';
import indexReducer from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(indexReducer,  applyMiddleware(thunk));

export default store;