import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../components/reducer/reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export const history = createBrowserHistory();

const enhancer = composeEnhancers(
  applyMiddleware(routerMiddleware(history), thunk)
  // other store enhancers if any
);

const store = createStore(createRootReducer(history), enhancer);

export default store;
