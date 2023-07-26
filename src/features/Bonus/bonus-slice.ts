import {createSlice} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from 'common/utils/create-app-async-thunk/create-app-async-thunk';
import {
	bonusAPI,
	RequestCreateAccessTokenType,
	ResponseCreateAccessTokenType,
	ResponseGeneralType
} from 'features/Bonus/bonus-api';


export const createAccessToken = createAppAsyncThunk<ResponseCreateAccessTokenType, RequestCreateAccessTokenType>('bonus/access-token', async (data, {rejectWithValue}) => {
	try {
		console.log(await bonusAPI.createAccessToken(data))
		return await bonusAPI.createAccessToken(data)
	} catch (e) {
		return rejectWithValue(null)
	}
})

export const getGeneralInformation = createAppAsyncThunk<{ generalInformation: ResponseGeneralType }, string>('bonus/general-information', async (accessToken, {rejectWithValue}) => {
	try {
		return {generalInformation: await bonusAPI.getGeneralInfo(accessToken)}
	} catch (e) {
		return rejectWithValue(null)
	}
})

let initialState = {
	accessToken: '',
	generalInformation: {} as ResponseGeneralType
}

const slice = createSlice({
	name: 'bonus',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(createAccessToken.fulfilled, (state, action) => {
				state.accessToken = action.payload.accessToken
			})
			.addCase(getGeneralInformation.fulfilled, (state, action) => {
				state.generalInformation = action.payload.generalInformation
			})
	}
})
export const bonusActions = {createAccessToken, getGeneralInformation}
export const SliceReducer = slice.reducer