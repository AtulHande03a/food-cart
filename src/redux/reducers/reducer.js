const INIT_STATE = {
  cart: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const ItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ItemIndex >= 0) {
        state.cart[ItemIndex].qnty += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          cart: [...state.cart, temp],
        };
      }

    case "REMOVE_FROM_CART":
      const data = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: data,
      };

    case "REMOVE_ONE":
      const ItemIndex_dec = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[ItemIndex_dec].qnty >= 1) {
        const dltitem = (state.cart[ItemIndex_dec].qnty -= 1);
        console.log([...state.cart, dltitem]);

        return {
          ...state,
          cart: [...state.cart],
        };
      } else if (state.cart[ItemIndex_dec].qnty === 1) {
        const data = state.cart.filter((el) => el.id !== action.payload);

        return {
          ...state,
          cart: data,
        };
      }
      break;
    default:
      return state;
  }
};
