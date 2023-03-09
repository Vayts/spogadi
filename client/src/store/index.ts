import { configureStore } from '@reduxjs/toolkit';
import { regionSlice } from '@src/store/region/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@src/store/saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		region: regionSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
