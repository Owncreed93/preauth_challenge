import { calculateSubset } from "../helpers";

describe('calculateSubset', ()  => {

    it('All positive integers - Should return a subset that adds up to the goal. ', () => {
        const numbers = [2, 5, 8, 14, 0];
        const goal = 10;
        const result = calculateSubset(numbers, goal);
        expect(result).toEqual([2,8]);
    });

    it('Positive and Negative integers - Should return a subset that adds up to the goal.', () => {
        const numbers =  [12, -5, 3, -9, 15, -8];
        const goal = 4;
        const result = calculateSubset(numbers, goal);
        expect(result).toEqual([12, -8]);
    });

    it('All positive integers - Shouldn\'t return a subset that does adds up to the goal.', () => {
        const numbers = [3, 8, 2, 5, 12];
        const goal = 21;
        const result = calculateSubset(numbers, goal);
        expect(result).toEqual([]);
    });

    it('Positive and Negative integers - Should\'t return a subset that adds up to the goal.', () => {
        const numbers =  [-4, -8, 3, 7, 0, 6];
        const goal = 12;
        const result = calculateSubset(numbers, goal);
        expect(result).toEqual([]);
    });

});