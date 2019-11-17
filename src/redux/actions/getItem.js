import ActionTypes from "../constants/ActionTypes";

export const getItems = () => {
  return {
    type: ActionTypes.GET_ITEMS
  };
};

export const itemsFilterChange = payload => ({
  type: ActionTypes.ITEMS_FILTER_CHANGE,
  payload
});
