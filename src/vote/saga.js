import { takeLatest, select } from 'redux-saga/effects';
import { ActionTypes } from './action';
import { Drizzle, generateStore } from 'drizzle';
import drizzleOptions from '../drizzleOptions';
import { getContract } from './selector';

function* addPlaceVotes(action) {
    const payload = action.payload;
    const contract = yield select(getContract, 'Betting');
    debugger;
    if (!payload) return;
}


const voteSaga = [
    takeLatest(ActionTypes.ADD_PLACE_VOTES, addPlaceVotes),
];

export default voteSaga;
