import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call } from 'redux-saga/effects';
import { getRegionRequest } from '@src/store/region/action';
import { regionRequestError, regionRequestStart, regionRequestSuccess } from '@src/store/region/reducer';
import { getRequest } from '@src/api/request';
import { ROUTES } from '@constants/routes';

function* regionSaga(action) {
	const { name } = action.payload;
	try {
		yield put(regionRequestStart());
		const response = yield call(getRequest, `${ROUTES.region.get}/${name}`);
		yield put(regionRequestSuccess(response.data));
	} catch (e) {
		yield put(regionRequestError());
	}
}

export function* watchRegion(): SagaIterator {
	yield takeLatest(getRegionRequest, regionSaga);
}
