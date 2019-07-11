import produce from 'immer';
import { types } from '../actions';

const initialState = {
  status: 'initial',
  data: [],
  error: '',
};

export default (state = initialState, { type, payload }) => {
  const { SEARCH_REPOSITORIES } = types;
  switch (type) {
    case SEARCH_REPOSITORIES.REQUEST:
      return produce(state, draft => {
        draft.status = 'pending';
      });
    case SEARCH_REPOSITORIES.SUCCESS:
      return produce(state, draft => {
        draft.status = 'success';
        draft.data = payload;
      });
    case SEARCH_REPOSITORIES.FAILURE:
      return produce(state, draft => {
        draft.error = payload;
        draft.status = 'failure';
      });
    default:
      return state;
  }
};
