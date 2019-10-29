import GenerateYear from './GenerateYear';

describe('GenerateYear', () => {
    it('generates a years worth of days, in blocks of seven', () => {
        const now = new Date();
        const then = new Date();

        then.setDate(now.getDate() - 364);

        expect(GenerateYear().length).toBe(53);
        expect(GenerateYear().every((week) => week.length <= 7)).toBe(true);
        let i = 0;
        GenerateYear().forEach((week) => {
            week.forEach((day) => i++);
        });
        expect(i).toEqual(365);
        expect(GenerateYear()[0][0].date.getFullYear()).toBe(then.getFullYear());
    });
})