import { GildedRose } from "./gilded-rose";

export function compareProductName(pattern: string, stringToCompare: string): boolean{
    const regex_patern = new RegExp(`^${pattern}`);
    let result = false;
    if (regex_patern.test(stringToCompare)) result = true;
    return result
}

export function simulateUpdates(guilded_rose: GildedRose, iterations: number){
    for (let i = 0; i < iterations; i++) {
        guilded_rose.updateQualityTwo();
    }
}