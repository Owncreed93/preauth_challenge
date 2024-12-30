import { calculateSubset } from "./utils/helpers";
import { askData, closeTerminal } from "./utils/prompts";


const main = async () => {

    const dataIntegers = await askData('How many numbers(integer) do you want to evaluate?: ');

    const quantity: number = parseInt(dataIntegers, 10);

    if (isNaN(quantity)) {
        console.error(`'${dataIntegers}' is not an integer.`);
        closeTerminal();
        process.exit(0);
    }

    let numbers: number[] = [];
    for(let i = 1; i <= quantity; i++){
        let inputNumber = await askData(`Enter value (${i}): `);

        let number: number = parseInt(inputNumber, 10);
        if (isNaN(number)) {
            console.error(` '${inputNumber}' is not an integer.`);
            closeTerminal();
            process.exit(0);
        } 
        numbers.push(number);
    }

    if (numbers.length == 0) {
        console.log('The set of numbers cannot be empty.');
        process.exit(0);
    }
    console.log('This is your set of numbers', numbers);

    const dataGoalNumber = await askData('Which is the number you want to find ?: ');

    const goalNumber: number = parseInt(dataGoalNumber, 10);

    if (isNaN(goalNumber)) {
        console.error(`'${dataGoalNumber}' is not an integer.`);
        closeTerminal();
        process.exit(0);
    }

    const result = calculateSubset(numbers, goalNumber);
    
    if (result.length > 0) {
        console.log('The result set is:', result);
    } else {
        console.log('There is no combination that matches your needs. ', result);
    }
    
    process.exit(0);
}

try {
    
    main().catch( (err) =>{
        console.error( `Error in the main app ${err}`)
    });

} catch (error) {
    console.error( `Error in detected: ${error}`)
}