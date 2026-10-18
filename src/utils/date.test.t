import { describe, expect, it } from 'vitest';
import { formatDate } from './date';

describe('formatDate', () => {
	it('formats a date as a non-empty string', () => {
		const result = formatDate(new Date('2024-01-15T12:00:00.000Z'));

		expect(typeof result).toBe('string');
		expect(result.length).toBeGreaterThan(0);
	});

	it('includes the year in the formatted result', () => {
		const result = formatDate(new Date('2024-01-15T12:00:00.000Z'));

		expect(result).toContain('2024');
	});
});
