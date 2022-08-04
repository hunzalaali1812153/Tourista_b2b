import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel2 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2';

import authReducer from '../reducers/AuthSlice';
import counterReducer from '../features/counter/counterSlice';
import TourProfileSlice from '../reducers/TourProfileSlice';
import TransportProfileSlice from '../reducers/TransportProfileSlice';
import HotelProfileSlice from '../reducers/HotelProfileSlice';
import UserProfileSlice from '../reducers/UserProfileSlice';
import CustomerProfileSlice from '../reducers/CustomerProfileSlice';
import CollaborationProfileSlice from '../reducers/CollaborationProfileSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const reducers = combineReducers({
  count: counterReducer,
  authentication: authReducer,
  TourSlice: TourProfileSlice,
  TransportSlice: TransportProfileSlice,
  HotelSlice: HotelProfileSlice,
  UserSlice: UserProfileSlice,
  CustomerSlice: CustomerProfileSlice,
  CollaborationSlice: CollaborationProfileSlice
});

const _persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});

export const persistor = persistStore(store)