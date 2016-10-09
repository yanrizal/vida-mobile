import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../Reducers'
import { routerMiddleware } from 'react-router-redux'


const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
    	applyMiddleware(
	      thunkMiddleware
	    )
    )
  )
}

