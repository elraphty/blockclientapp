import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

// Reducer
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};
const middleware = [thunk];

export default () => {
    let store = createStore(
        persistedReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            // window.__REDUX_DEVTOOLS_EXTENSION__
            // && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    let persistor = persistStore(store);

    return { store, persistor };
};