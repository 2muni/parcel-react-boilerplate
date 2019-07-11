const makeAsyncActions = actionName => ({
  REQUEST: `${actionName}/REQUEST`,
  SUCCESS: `${actionName}/SUCCESS`,
  FAILURE: `${actionName}/FAILURE`,
});
const makeActionCreator = actionType => {
  return payload => ({ type: actionType, payload });
};
const makeAsyncActionCreator = actions => {
  const actionCreator = {
    request: makeActionCreator(actions.REQUEST),
    success: makeActionCreator(actions.SUCCESS),
    failure: makeActionCreator(actions.FAILURE),
  };
  return actionCreator;
};

// Action Types
export const types = {
  SEARCH_REPOSITORIES: makeAsyncActions('SEARCH_REPOSITORIES'),
};
// Action Creators
export default {
  searchRepositories: makeAsyncActionCreator(types.SEARCH_REPOSITORIES),
};
