import {AppRootStateType} from 'app/store';
export const  generalInfoSelector = (state: AppRootStateType) => state.generalInformation
export const  accessTokenSelector = (state: AppRootStateType) => state.accessToken