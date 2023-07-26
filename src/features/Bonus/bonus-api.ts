import axios from 'axios';

const API_KEY = {
	'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c'
}
export const bonusAPI = {
	createAccessToken(data: RequestCreateAccessTokenType) {
		return axios.post<ResponseCreateAccessTokenType>(`http://84.201.188.117:5021/api/v3/clients/accesstoken`, data, { headers: API_KEY })
			.then(res => res.data)
	},
	getGeneralInfo(accessToken: string) {
		return axios.get<ResponseGeneralType>(`http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${accessToken}`, { headers: API_KEY })
			.then(res => res.data)
	}
}

export type ResponseGeneralType = {
	resultOperation: {
		'status': number,
		'message': string,
		'messageDev': string,
		'codeResult': number,
		'duration': number,
		'idLog': string
	},
	data: {
		'typeBonusName': string,
		'currentQuantity': number,
		'forBurningQuantity': number,
		'dateBurning': string
	}
}

export type RequestCreateAccessTokenType = {
	idClient: string,
	accessToken: string,
	paramName: string,
	paramValue: string,
	latitude: number,
	longitude: number,
	sourceQuery: number
}

export type ResponseCreateAccessTokenType = {
	result: {
		status: number,
		message: string,
		messageDev: string,
		codeResult: number,
		duration: number,
		idLog: string
	},
	accessToken: string
}