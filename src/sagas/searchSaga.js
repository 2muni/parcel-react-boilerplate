import { takeEvery, call, put } from 'redux-saga/effects';
import { search } from '../api';
import action, { types } from '../actions';

const { searchRepositories } = action;

export function* loadRepositories({ payload }) {
  try {
    const { data } = yield call(search.repositories, payload);
    yield put(searchRepositories.success(data));
  } catch ({ response: { status } }) {
    yield put(searchRepositories.failure(status));
  }
}

export default function* watcher() {
  yield takeEvery(types.SEARCH_REPOSITORIES.REQUEST, loadRepositories);
}
