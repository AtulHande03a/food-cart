export const ADD = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const REMOVE = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

export const DELETE = (item) => {
  return {
    type: "REMOVE_ONE",
    payload: item,
  };
};
