import { formatUrl } from '../src';

describe('formatUrl', () => {
	it('should return true', () => {
		const result = formatUrl('https://www.google.com', { foo: 'bar' });
		expect(result).toEqual('https://www.google.com?foo=bar');
	});
});
