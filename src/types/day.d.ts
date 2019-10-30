import { transaction } from './transaction';

export declare interface day {
    date: Date,
    monthLabel?: boolean,
    score?: number,
    failures?: number,
    successes?: number,
    simpleDate?: string,
    class?: string,
    type?: string,
    transactions?: transaction[],
    value?: number,
}