import { all, fork } from 'redux-saga/effects'
import { drizzleSagas } from 'drizzle'

import voteSaga from './vote/saga';

export default function* root() {
    yield all([
        ...drizzleSagas.map(saga => fork(saga)),
        ...voteSaga,
    ])
}
