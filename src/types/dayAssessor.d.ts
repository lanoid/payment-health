import { transaction } from './transaction';
import { day } from './day';

export declare interface DayProcessor {(
    day: day,
    data: transaction[],
    dictionary: any
): any}