import DayProcessor from './DayProcessor';
import DateString from './dateString';

const now = new Date();

const day = {
    date: now
};

const shortDate = DateString(now);
const dateReadable = DateString(now, '/', 'DMY');

const dictionary = {
    successLabel: 'success',
    successesLabel: 'successes',
    failureLabel: 'failure',
    failuresLabel: 'failures',
    noDataLabel: 'no data',
    successClass: 'success',
    failureClass: 'failure',
    noDataClass: 'no-data'
};

let data: any[];

describe('DayAssessor', () => {
    it('returns a default day', () => {
        data = [];
        const noDataDay = DayProcessor(day, data, dictionary);
        expect(noDataDay.score).toBe(0);
        expect(noDataDay.failures).toBe(0);
        expect(noDataDay.successes).toBe(0);
        expect(noDataDay.simpleDate).toBe(dateReadable);
        expect(noDataDay.class).toBe('no-data');
        expect(noDataDay.type).toBe('no data');
        expect(noDataDay.transactions.length).toBe(0);
    });

    it('adds information about failures', () => {
        data = [
            {transactionType: 'failed', date: shortDate, amount: 66.6},
            {transactionType: 'failed', date: shortDate, amount: 66.6},
            {transactionType: 'success', date: shortDate, amount: 66.6}
        ];
        const failureDay = DayProcessor(day, data, dictionary);

        expect(failureDay.score).toBe(1);
        expect(failureDay.failures).toBe(2);
        expect(failureDay.successes).toBe(1);
        expect(failureDay.simpleDate).toBe(dateReadable);
        expect(failureDay.class).toBe('failure');
        expect(failureDay.type).toBe('failure');
        expect(failureDay.transactions.length).toBe(3);
    });

    it('adds information about successes', () => {
        data = [
            {transactionType: 'success', date: shortDate, amount: 66.6},
            {transactionType: 'success', date: shortDate, amount: 66.6},
            {transactionType: 'success', date: shortDate, amount: 66.6}
        ];
        const failureDay = DayProcessor(day, data, dictionary);
        expect(failureDay.score).toBe(3);
        expect(failureDay.failures).toBe(0);
        expect(failureDay.successes).toBe(3);
        expect(failureDay.simpleDate).toBe(dateReadable);
        expect(failureDay.class).toBe('success');
        expect(failureDay.type).toBe('success');
        expect(failureDay.transactions.length).toBe(3);
    });
});