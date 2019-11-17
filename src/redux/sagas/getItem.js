import { all, call, put, takeLatest, select } from "redux-saga/effects";
import ActionTypes from "../constants/ActionTypes";
import APICaller from "utils/APICaller";

export function* getItems() {
  let url = "items";
  const filters = yield select(state => state.itemsReducer.filters);
  let { search = "", sort = "", order = "" } = filters;
  if (search.length || sort.length || order.length) {
    search = search.trim().toLowerCase();
    url = `${url}?search=${search}&sort=${sort}&order=${order}`;
  }
  try {
    const response = yield call(APICaller, { method: "GET", url });
    yield put({
      type: ActionTypes.GET_ITEMS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_ITEMS_FAILURE,
      payload: []
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_ITEMS, getItems)]);
}
