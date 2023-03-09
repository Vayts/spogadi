import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { watchRegion } from '@src/store/region/sagas';

const sagas = [
	watchRegion,
];

export default function* rootSaga(): SagaIterator {
	yield all(sagas.map(fork));
}
