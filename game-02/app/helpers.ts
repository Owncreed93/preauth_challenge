export function compareProductName(pattern: string, stringToCompare: string): boolean{
    const regex_patern = new RegExp(`^${pattern}`);
    let result = false;
    if (regex_patern.test(stringToCompare)) result = true;
    return result
}