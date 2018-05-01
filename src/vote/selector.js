import { Drizzle } from 'drizzle';
import drizzleOptions from '../drizzleOptions';
import SimpleStorage from './../../build/contracts/SimpleStorage.json';

export const getContract = (state, contractName) => {
    const drizzle = new Drizzle(drizzleOptions, state);
    debugger;
};
