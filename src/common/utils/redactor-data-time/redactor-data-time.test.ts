import {redactorDataTime} from 'common/utils/redactor-data-time/redactor-data-time';

describe('redactorDataTime', () => {
	it('should return formatted time for valid input', () => {
		const input = '2022-01-01T12:00:00.000Z';
		const output = '01.01';

		expect(redactorDataTime(input)).toBe(output);
	});

	it('should return undefined for empty input', () => {
		const input = undefined;

		expect(redactorDataTime(input)).toBeUndefined();
	});

});