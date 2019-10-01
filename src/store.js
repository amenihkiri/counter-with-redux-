import  CounterReducer from './reducer/counterReducer';
import { createStore} from 'redux';
 

const store= createStore (CounterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;