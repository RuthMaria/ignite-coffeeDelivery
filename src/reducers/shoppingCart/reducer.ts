import { produce } from 'immer';
import { ActionTypes } from './actions';

export interface Coffee {
  id: string;
  photo: string;
  name: string;
  price: number;
  amount: number;
  totalPrice: number;
}

interface shoppingCartState {
  shoppingCart: Coffee[];
}

export function shoppingCartReducer(state: shoppingCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_SHOPPING_CART:
      return produce(state, (draft) => {
        draft.shoppingCart.push(action.payload.coffee);
      });

    case ActionTypes.REMOVE_COFFEE_SHOPPING_CART: {
      const indexCoffee = state.shoppingCart.findIndex((coffee) => {
        return coffee.id === action.payload.id;
      });

      if (indexCoffee < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.shoppingCart.splice(indexCoffee, 1);
      });
    }

    case ActionTypes.ADD_AMOUNT_COFFEE_SHOPPING_CART: {
      const indexCoffee = state.shoppingCart.findIndex((coffee) => {
        return coffee.id === action.payload.id;
      });

      if (indexCoffee < 0) {
        return state;
      }

      return produce(state, (draft) => {
        const coffee = draft.shoppingCart[indexCoffee];
        draft.shoppingCart[indexCoffee].amount = coffee.amount + 1;
        draft.shoppingCart[indexCoffee].totalPrice =
          coffee.totalPrice + coffee.price;
      });
    }

    case ActionTypes.DECREASE_AMOUNT_COFFEE_SHOPPING_CART: {
      const indexCoffee = state.shoppingCart.findIndex((coffee) => {
        return coffee.id === action.payload.id;
      });

      if (indexCoffee < 0) {
        return state;
      }

      return produce(state, (draft) => {
        const coffee = draft.shoppingCart[indexCoffee];
        draft.shoppingCart[indexCoffee].amount = coffee.amount - 1;
        draft.shoppingCart[indexCoffee].totalPrice =
          coffee.totalPrice - coffee.price;
      });
    }
    default:
      return state;
  }
}
