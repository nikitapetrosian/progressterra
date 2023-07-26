import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {SliceReducer} from 'features/Bonus/bonus-slice';
import thunk from 'redux-thunk';

export const store = configureStore({
	reducer: SliceReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>