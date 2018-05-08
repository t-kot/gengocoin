import { takeLatest, select, call } from 'redux-saga/effects';
import { ActionTypes } from './action';
import { getContract } from './selector';

function* addPlaceVotes(action) {
    const payload = action.payload;
    const result = drizzle.contracts.Betting.methods.addPlaceVotes.cacheSend(payload.volume, payload.value);
}


const voteSaga = [
    takeLatest(ActionTypes.ADD_PLACE_VOTES, addPlaceVotes),
];

export default voteSaga;
