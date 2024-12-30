import { createInterface, Interface } from 'readline';
// import { TerminalType } from '../types';

const terminal: Interface = createInterface({
    input: process.stdin,
    output: process.stdout
})

export default terminal
