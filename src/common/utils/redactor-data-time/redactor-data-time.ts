export const redactorDataTime = (dataTime: string | undefined) => {
	return dataTime && new Intl.DateTimeFormat('ru').format(Date.parse(dataTime)).slice(0, 5)
}
