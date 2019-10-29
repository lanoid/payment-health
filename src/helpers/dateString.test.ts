import DateString from './dateString';

describe('DateString', () => {
    const now = new Date();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + (now.getDate())).slice(-2);
    
    it('converts a date to a string', () => {
        expect(DateString(now)).toBe(`${now.getFullYear()}-${month}-${day}`);
    });

    it('converts a date to a string with alternate separator', () => {
        expect(DateString(now, '/')).toBe(`${now.getFullYear()}/${month}/${day}`);
    });

    it('converts a date to a string with a different order', () => {
        expect(DateString(now, '/', 'DMY')).toBe(`${day}/${month}/${now.getFullYear()}`);
    });
});