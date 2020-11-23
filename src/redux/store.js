import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import newsReducer from './reducer/newsReducer'

const rootReducer = combineReducers({
    news: newsReducer

});

const middleWare = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(rootReducer, middleWare)

export default store;